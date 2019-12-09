# 目录
- 进程
- 线程
- Node.js的进程控制
- Node.js的线程控制

# 进程 Process
- 场景
> notepad.exe 是一个程序，不是进程
>
> 双击 notepad.exe 时，操作系统会开启一个进程
- 定义
```
1.进程是程序的执行实例
2.程序在CPU上执行时的活动叫做进程
```
- 特点
```
1.一个进程可以创建另一个进程（父进程与子进程）
2.通过任务管理器可以看到进程
```
# 了解CPU
- 特点
```
1.一个单核CPU，在一个时刻，只能做一件事
2.不同进程中快速切换可以让用户同时看电影、听音乐、写代码
```
- 多程序并发执行
```
1.指多个程序在宏观上并发，微观上串行
2.每个进程会出现「执行-暂停-执行」的规律
3.多个进程之间会出现抢资源（如打印机）的现象
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-4eb8dc6b5442e947.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 阻塞
- 等待执行的进程中
```
1.都是非运行态
2.一些(A)在等待CPU资源
3.另一些(B)在等待I/O完成（如文件读取）
4.如果这时候把CPU分配给B进程，B还是在等待I/O
5.我们把这个B叫做阻塞进程
6.因此，分派程序只会把CPU分配给非阻塞进程
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-7a7a692404f837bc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# 线程 Thread 的引入
- 分阶段
```
1.在面向进程设计的系统中，进程是程序的基本执行实体
2.在面向线程设计的系统中，进程本身不是基本运行单位，而是线程的容器
```
- 引入原因
```
1.进程是执行的基本实体，也是资源分配的基本实体
2.导致进程的创建、切换、销毁太消耗CPU时间了
3.于是引入线程，线程作为执行的基本实体
4.而进程只作为资源分配基本实体
5.此处可以以设计师和工程师分开招聘举例
```

# 线程 Thread
- 概念
```
1.CPU调度和执行的最小单元
2.一个进程中至少有一个线程，可以有多个线程
3.一个进程中的线程共享该进程的所以资源
4.进程的第一个线程叫做初始化线程
5.线程的调度可以由操作系统负责，也可以用户自己负责
```
- 举例
```
1.浏览器进程里面有渲染引起、V8引擎、存储模块、网络模块、用户界面模块等
2.每个模块都可以放在一个线程里
```
- 分析

``子进程V.S.线程``

# child_process
- 使用目的
```
1.子进程的运行结果存储在系统缓存之中（最大200Kb）
2.等到子进程运行结束之后，主进程再用回调函数读取子进程的运行结果
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-63e9175e62f13e55.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

# API
- exec(cmd, options, fn)
```
1.execute的缩写，用于执行命令
2.同步版本：execSync(Node.js一般不使用同步)
```
- Stream
```
返回一个流
```
- Promise
```
可以使其Promise化（用util.promisify）
```
- 有漏洞
```
如果cmd被注入了，可能执行意外的代码
推荐使用execFile
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-1015b18b482691b7.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-91c41fa7eed51752.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- execFile
```
执行特定的程序
命令行的参数要用数组的形式传入，无法注入
支持stream
```
![image.png](https://upload-images.jianshu.io/upload_images/1181204-27c14b24cfb6ae77.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-e5065565ea12ffda.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1181204-91e451e918591579.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)