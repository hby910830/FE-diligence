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