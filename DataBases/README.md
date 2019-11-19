# 关系型数据库的范式
``范式可以理解为设计标准``

## 第一范式 1NF
- 定义

**字段不可再分**
- 举例
```
存储体检者的双眼视力
那么应该存为左眼视力和右眼视力两个字段
即user表里应该有 left_eye 和 right_eye
而不能把它们存在一个字段
```

**第一范式 的缺点**
![image.png](https://upload-images.jianshu.io/upload_images/1181204-cd9f86aa2d114e2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
###### 存在如下问题：
- 数据冗余
- 创建系时插入异常
- 删除学生会导致系消失
- 学生转系时改动多处
###### 结论：第一范式不够强

## 第二范式 2NF
- 定义（不准确）
```
在1NF的基础上，要有键（键可由多个字段组成）
所有字段分别完全依赖于键
如果键是多个字段组合，则不允许部分依赖于该键
```
- 依赖关系
```
给出键，就能唯一确定字段的值
如给出学号，就能唯一确定姓名，反之则不行
则称姓名依赖于学号
```
- 上表不满足第二范式的地方
```
上表的键为（学号，课名）
但存在部分依赖：姓名依赖于学号
```
- 改进
```
选课表（学号、课名、分数）
学生表（学号、姓名、系名、班主任）
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-3ae06cfc6039d126.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 第三范式 3NF
- 定义（不准确）
```
一个表里不能有两层依赖
给出学号，就能确定系名：系名依赖于学号
给出系名，就能确定系主任：系主任依赖于系名
所以，系主任间接依赖于学号
```
- 解决办法
``把系名和系主任单独建表``
![image.png](https://upload-images.jianshu.io/upload_images/1181204-6885c592a8474047.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 总结
- 第一范式：属性不可分割
- 第二范式：字段完全依赖于键
- 第三范式：字段没有间接依赖于键
- BC范式：键中的属性也不存在间接依赖(多个键之间互相依赖)

## 数据库设计经验
- 高内聚
> 把相关的字段放在一起，不相关的分开建表
>
> 如果两个字段能够单独建表，那就单独建表

- 低耦合
>如果两个表之间有弱关系
>
> 一对一可放在一个表，也可两个表加外键
>
> 一对多一般用外键
>
> 多对多一般建中间表

## 一对一
**假设一个学生只能加入一个班**
- 可以把班级放在学生表里
> 学生id：1001；  姓名：小明；班级id：4002
>
> 班级id：4002；  名称：入门1级

- 也可以单独建立关联表
>如果两个表之间有弱关系
>
> 一 学生id：1001；  姓名：小明；
>
> 一 学生班级id：2003；  学生id：1001；班级id：4002
>
> 班级id：4002； 名称：入门1级

## 一对多
**假设一个作者能写多本书**
- 可以把书放在作者表立吗？
>某些DBMS支持数组，可以存两个id到一个字段
>
> 作者id：1001；姓名：大牛；books：[2001，3002]
>
> 如果不支持数组，就不能这么做了

- 单独建立关联表（推荐）
> 作者id：1001；姓名：大牛
>
> 出版id：2001；作者id：1001；书id：4002
>
> 出版id：2002；作者id：1001；书id：4003
>
> 书id：4002；名称：JS入门

## 什么时候建关联表
- 当关联自身存在属性时
>比如关联的有效期，有效期为一年
>
> 比如关联的级别，店铺会员分为VIP1～6


## JOIN
- 连接表
> inner join
>
> left join
>
> right join
>
> full outer join

- 看图巧记
![image.png](https://upload-images.jianshu.io/upload_images/1181204-e4da987545568184.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-a417b24219095de5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

[参考文章](https://zhuanlan.zhihu.com/p/29234064)

## 语法
把表名改为
>T1{INNER|{LEFT|RIGHT|FULL}[OUTER]} JOIN T2 ON boolean_expression
例如:
```
SELECT A.PK AS A_PK, B.PK AS B_PK,
       A.Value AS A_Value, B.Value AS B_Value
FROM Table_A A
INNER JOIN Table_B B
ON A.PK = B.PK;
```

# 试试看1
- 创建数据库
``CREATE DATABASE IF NOT EXISTS han DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci; ``
- 创建表
```
create tables users(id serial, name text);
create table staffs(id serial, name text);
create table orders(id serial, user_id bigint unsigned, staff_id bigint unsigned, amount int unsigned);
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-6dca49a38122e618.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 试试看2
- 创建记录
```
insert into users (name) values ('XiaoMing');
insert into staffs (name) values ('XiaoHong');
insert into orders (user_id,staff_id,amount) values (1,1,100);
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-f813f1e6088cfc46.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 使用inner join 

``select users.name, orders.amount from users inner join orders on users.id=orders.user_id;``
![image.png](https://upload-images.jianshu.io/upload_images/1181204-71e9fc08d07c7d91.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 使用left join 

``select users.name, orders.amount from users left join orders on users.id = orders.user_id;``
![image.png](https://upload-images.jianshu.io/upload_images/1181204-9023667b4c645047.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 其他 join 
- Left join
> 会保留右边的null，以保证左边都显示
- Right join
> 会保留左边的null，以保证右边都显示
- Full outer join
> 会保留两边的null，以保证两边都显示