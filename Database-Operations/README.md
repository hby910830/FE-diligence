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
docker container run mysql1 开启刚关掉的容器
docker rm mysql1 删掉容器，必要时可加上-f
docker run 启动新容器
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-f145b6bd814ffff2.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


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


end
