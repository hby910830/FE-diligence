# Node.js技术架构
## Node.js不是什么
- **不是Web框架**

``Nodejs并不是后端框架，所以你不能把Node.js与Flask或者Spring对比``

- **不是编程语言**

``Node.js并不是后端js，所以你不能把Node.js与Python或PHP对比``


## Node.js是什么
- **是一个平台**

``它将多种技术组合起来，让JavaScript也能调用系统接口、开发后端应用``

- **Node.js用到了哪些技术**

```
V引擎；
libuv；
C/C++实现的c-ares、http-parser、OpenSSL、zlib等库
```

## Node.js技术架构
![](https://upload-images.jianshu.io/upload_images/1181204-05638c3e0131fabc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

## 什么是bindings
- **背景**

```
C/C++实现了一个http—parser库，很高效
你只会写JS，但是你想调用这个库，
直接调用肯定是不能成功的，你需要一个中间桥梁
```

- **bindings**

```
Node.js用C++对http-parser进行封装，使它符合某些需求，封装的文件叫做http-parser-bingds.cpp；
用Node.js提供的编译工具将其编译为.node文件；
JS代码可以直接require这个.node文件；
这样JS就能调用C++库，中间的桥梁就是binding
```

## Node.js的工作流程
![](https://upload-images.jianshu.io/upload_images/1181204-d485ff552f36b1d4.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)


## libuv是什么
- **背景**
```
Ryan为了一个跨平台的异步I/O库，开始写libuv；
libuv会根据系统自动选择合适的方案
```

- **功能**

``可以用于TCP/UDP/DNS/文件等的异步操作``

## V8是什么
- **功能**
```
将JS源代码变成本地代码并执行；
维护调用栈，确保JS函数的执行顺序；
内存管理，为所有对象分配内存；
垃圾回收，重复利用无用的内存；
实现JS的标志库
```

- **注意**

```
V8不提供DOM API；
V8执行JS是单线程的；
可以开启两个线程分别执行JS；
V8本身是包含多个线程的，如垃圾回收是单独线程；
自带event loop，但Node.js基于libuv自己做了一个
```

## 总结
- **用libuv进行异步I/O操作**
- **用event loop管理事件处理顺序**
- **用C/C++库高效处理DNS/HTTP...**
- **用bindings让JS能和C/C++沟通**
- **用V8运行JS**
- **用Node.js标准库简化JS代码**
- **这就是Node.js**
