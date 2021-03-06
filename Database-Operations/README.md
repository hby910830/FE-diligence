# Node.js操作数据库

## 目录
- #### 用Docker安装数据库
- #### 连接数据库
- #### 增删改查
- #### ORM

## Docker安装MySQL

- 使用 docker run 命令启动容器
- **name** 是容器的名字
- MYSQL_ROOT_PASSWORD是密码
- tag是版本号
- 再加一个端口映射 -p 3306:3306
- 最终命令docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -p 3306:3306 -d mysql:tag

![image.png](https://upload-images.jianshu.io/upload_images/1181204-5293da4a1c50e09c.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 一些有用的Docker命令

```
docker ps 查看容器运行状态
docker kill mysql1 关掉容器
docker container start mysql1 开启刚关掉的容器
docker rm mysql1 删掉容器，必要时可加上-f
docker run 启动新容器
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-f145b6bd814ffff2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## CRM学习法(COPY,RUN,MODIFY)
- 目标
```
1.了解如何连接mysql server
2.了解如何创建数据库
3.了解如何创建表(注意编码utf8mb4)
4.了解如何对表增删改查
5.了解如何添加记录
6.了解如何对记录增删改查
```
- 推荐文档

[devdocs.io](https://devdocs.io/postgresql~11/tutorial-createdb) 开启postgresql文档

[菜鸟教程](https://www.runoob.com/mysql/mysql-create-database.html)

## 如何用命令行连接mysql
- Docker exec命令
```
docker exec -it mysql1 bash
这句命令会进入容器，容器里有一个Linux系统
然后你就可以在这个系统里运行mysql
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-c8f4ef3a6d694c6e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- mysql命令
```
mysql -u root -p 回车，然后输入密码123456
show databases;可查看数据库列表(分号一定要写)
use xxx;可选择使用xxx数据库
use sys;试试默认的sys数据库
show tables;查看所以表
select * from xxx;查看表内容
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-08145ce3288d3380.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-e24ef3327c51933e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-f800e1bc58f38149.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 创建数据库

``CREATE DATABASE IF NOT EXISTS han DEFAULT CHARSET utf8mb4 COLLATE utf8mb4_unicode_520_ci;``
![image.png](https://upload-images.jianshu.io/upload_images/1181204-bbefa4c134bcf0be.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-4c747182c689ec51.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 创建表

```
`CREATE TABLE IF NOT EXISTS user(
  	name text,
  	age int
  )`
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-6918d53e084587d5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-69ab6ed0c254d1fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 删除表
``drop table user;`` (大小写无所谓，一定要写分号！)
## 删除数据库
``drop database han;`` (大小写无所谓，一定要写分号！)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-a2bef9db8ecc648d.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## 添加记录
``insert into user (name,age) values ('hanbaoyi', 28);``
![image.png](https://upload-images.jianshu.io/upload_images/1181204-e2f7b7b5e5835f89.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 删除记录
``delete from user where name='frank';``
![image.png](https://upload-images.jianshu.io/upload_images/1181204-0dc841fedfd20532.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 修改记录
``update user set age=30 where name='hanbaoyi';``
![image.png](https://upload-images.jianshu.io/upload_images/1181204-57f00c708f6d57e2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
- **注意，永远不要自己写update，delete语句，如果忘了写where，整个表数据都会被改**
![image.png](https://upload-images.jianshu.io/upload_images/1181204-3169730ac216b8d1.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 查询记录
``select name from user;``
``select name,age from user;``
``select name from user limit 10;``    //查询前10个
``select count(*) from user;``             //查询有多少个
![image.png](https://upload-images.jianshu.io/upload_images/1181204-03ebff951c58f924.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)