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