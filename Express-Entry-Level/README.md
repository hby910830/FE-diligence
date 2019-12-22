# HTTP协议
curl -v
- curl -s -v  网址
> -s 是silent，用于隐藏进度条
>
> -v 是verbose，用于打印全部header
>
> \* 开头的是注释
>
> \> 开头的是http请求
>
> \< 开头的是http响应

- 举例
> curl -s -v  http://xiedaimala.com
>
> 得到301和Location，于是重新请求（-L 自动重定向）
>
> curl -s -o nul -v https://xiedaimala.com
>
> -o nul 是为了隐藏HTML文本，内容太多不方便演示
>
> Linux或Mac要将nul 改成/dev/nulL

![image.png](https://upload-images.jianshu.io/upload_images/1181204-f3ccf0342c87dd2b.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-416e5e116743b8d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-eec8f78affccf760.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


# 请求和响应
请求
- 分为四部分
> 一、请求行
>
> 二、请求头
>
> 三、回车
>
> 四、请求体/消息体

```
如果请求体的内容为JSON
那么请求头就要有Content-Type: application/json
```

![image.png](https://upload-images.jianshu.io/upload_images/1181204-afc3bfcd87d1f8ae.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

响应
- 分为四部分
> 一、状态行
>
> 二、响应头
>
> 三、回车
>
> 四、响应体/消息体

```
如果响应体的内容为JSON
那么响应头就要有Content-Type: application/json
```

![image.png](https://upload-images.jianshu.io/upload_images/1181204-c64cec7dbcf0e488.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# Web框架
- 功能
> 更方便的处理HTTP请求与响应
>
> 更方便的链接数据库、Redis
>
> 更方便的路由
>
> 其他：HTML模板

- 理念
> Web框架的主流思路都是MVC
>
> Model处理数据相关逻辑
>
> View处理视图相关逻辑，前后分离之后，View不重要
>
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
>
> 或者npm install express
>
> 以上命令二选一，不要混用
 
- 创建app.js
> 内容 Copy 自文档
>
> 然后Run一下app.js，命令为node app.ts，如果不想重启命令，用node-dev app.ts
>
> 打开http://localhost:3000预览
>
> Modify几处代码，比如改内容、路径、端口

# 用CRM(Copy-Run-Modify)学到了什么
- app = express()
```
这个app应该是核心
app.get('xxx', fn)用于对GET /xxx请求作出响应
app.listen(3000,fn)开启端口监听
```

# 使用 TypeScript
- 准备工作
```
yarn global add typescript ts-node ts-node-dev 全局安装工具
yarn add @types/express --dev 安装类型支持
tsc --init
修改tsconfig的target和noImplicitAny
将 require 改为 import
```
- 运行
``ts-node-dev app.ts``

# app的类型
- 使用IDE查看类型
> 用VSCode或WebStorm可以查看 app 对象的类型
>
> 类型为Express接口
>  
> Express extends Application
> 
> Application extends EventEmitter,IRouter,...
> 
> 其中，IRouter包含了 get/post/put等方法
> 
> 有了TypeScript，都不用看文档了

# express-generator
- 安装
```yarn global add express-generator```
- 使用
> express -h 查看帮助
>
> 创建文件： express --view=ejs 目录名

- CRM学习法
> yarn install; yarn start
>
> 分析app.js，主要API为 app.set 和 app.use
>
> app.set用于改配置，app.use用于使用中间件

![image.png](https://upload-images.jianshu.io/upload_images/1181204-4ba14f0d2cf4f589.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 改为TypeScript
- 改写
> app.js改为app.ts
>
> yarn add @types/node --dev ,这样才能使用require
>
> 你也可以用import代替require
>
> 你也可以用const代替var
>
> 需要 RequestHandler 和 ErrorRequestHandler 断言
>
> 将bin/www中的入口改为app.ts
>
> 添加start:ts脚本，将node改为ts-node-dev

![image.png](https://upload-images.jianshu.io/upload_images/1181204-6f765acf655b3a4e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 理解app.use
- 创建新目录express-demo-2
> 尝试使用req.url 和 res.send
>
> 多次使用会怎样？会报错
> 
>改成res.write,因为流
> 
> 为什么不会关闭呢？加上res.end()才会关闭
>
> next什么时候可以省略？ 最后一个中间件可以

![image.png](https://upload-images.jianshu.io/upload_images/1181204-7d00e6a0378859fc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# express 的编程模型
![image.png](https://upload-images.jianshu.io/upload_images/1181204-6381ebaf0f8565c4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 中间件
``fn就是中间件，因为它是被插入到启动和结束中间的物件``

# 优点
- 模块化
> 这种模型使得每个功能都能通过一个函数实现
>
> 然后通过app.use将这个函数整合起来
>
> 如果把函数放到文件或npm里，就实现了模块化

![image.png](https://upload-images.jianshu.io/upload_images/1181204-64e1286e30ac4e07.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- 以上图为例
> app.use(logger('dev'))
> 
> logger('dev')会返回一个函数
> 
> 这个函数会在每次请求到达的时候，打印出信息
> 
> 我们根本不用去了解它是怎么做到的
> 
> 我们也可以很快做出一个类似的模块

# 路由
- 使用app.use如何实现路由
```
app.use((request, response, next) => {
	if (request.path === '/' && request.method === 'GET') {
		response.send('根目录')
	}
	next()
})
```
- 更方便的写法
```
app.use('/xxx', fn)
app.get('/xxx', fn)
app.post('/xxx', fn)
app.route('/xxx').all(f1).get(f2).post(f3)
这些都是 API 糖
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-5934103668a806d9.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 错误处理
- next()能传参数吗？
```
可以看文档，也可以看TypeScript定义
推荐后者
```
- next(error)
``会直接进入errorHandler,不执行后面的中间件``
- 如何自定义errorHandler
```
1.还是看文档，文档说一般在最后定义（只有英文文档有写）
2.app.use((err, req, res, next) => {})
3.可以定义多个这样的中间件
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-f687bf84715f5850.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
