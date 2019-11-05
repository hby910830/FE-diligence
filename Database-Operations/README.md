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