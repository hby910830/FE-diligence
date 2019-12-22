# HTTP协议
curl -v
- curl -s -v  网址
> -s 是silent，用于隐藏进度条
> -v 是verbose，用于打印全部header
> \* 开头的是注释
> \> 开头的是http请求
> \< 开头的是http响应

- 举例
> curl -s -v  http://xiedaimala.com
> 得到301和Location，于是重新请求（-L 自动重定向）
> curl -s -o nul -v https://xiedaimala.com
> -o nul 是为了隐藏HTML文本，内容太多不方便演示
> Linux或Mac要将nul 改成/dev/nulL
![image.png](https://upload-images.jianshu.io/upload_images/1181204-f3ccf0342c87dd2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-416e5e116743b8d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-eec8f78affccf760.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 请求和响应
请求
- 分为四部分
> 一、请求行
> 二、请求头
> 三、回车
> 四、请求体/消息体

```
如果请求体的内容为JSON
那么请求头就要有Content-Type: application/json
```

![image.png](https://upload-images.jianshu.io/upload_images/1181204-afc3bfcd87d1f8ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

响应
- 分为四部分
> 一、状态行
> 二、响应头
> 三、回车
> 四、响应体/消息体

```
如果响应体的内容为JSON
那么响应头就要有Content-Type: application/json
```

![image.png](https://upload-images.jianshu.io/upload_images/1181204-c64cec7dbcf0e488.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# Web框架
- 功能
> 更方便的处理HTTP请求与响应
> 更方便的链接数据库、Redis
> 更方便的路由
> 其他：HTML模板

- 理念
> Web框架的主流思路都是MVC
> Model处理数据相关逻辑
> View处理视图相关逻辑，前后分离之后，View不重要
> Controller负责其他逻辑

# 架构示意
 ![image.png](https://upload-images.jianshu.io/upload_images/1181204-f3bcd4f9d9eca6db.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
 
 # 处理HTTP请求与响应
 - 最简单的封装
 ```
 将请求封装为[['get', '/xxx'], {请求头}, '请求体']
 将响应封装为[status, {响应头}, '响应体']
 ```
 - Node.js的封装
 ```
 封装在http模块中
 使用request(IncomingMessage的实例)读取请求
 使用response(ServerResponse的实例)设置响应
 ```
 - Express的封装
 ```
 封装级别高一点点，只需理解Express的编程模型即可
 ```
 [中文文档在此](https://expressjs.com/zh-cn/)
 
# Hello World
- 安装 express
> yarn add express
> 或者npm install express
> 以上命令二选一，不要混用
 
- 创建app.js
> 内容 Copy 自文档
> 然后Run一下app.js，命令为node app.ts，如果不想重启命令，用node-dev app.ts
> 打开http://localhost:3000预览
> Modify几处代码，比如改内容、路径、端口

# 用CRM(Copy-Run-Modify)学到了什么
- app = express()
```
这个app应该是核心
app.get('xxx', fn)用于对GET /xxx请求作出响应
app.listen(3000,fn)开启端口监听
```