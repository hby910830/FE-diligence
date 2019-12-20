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
