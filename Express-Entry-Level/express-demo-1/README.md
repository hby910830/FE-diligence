# 使用方法

```
git clone git@github.com:hby910830/express-starter-demo.git <你的目录名>
cd <你的目录名>
yarn install
node app.js 
```

注意，如果你需要初始化当前目录，直接用 `.` 代替 `<你的目录名>` 即可。如果当前目录不是空目录，需要先清空当前目录（包括隐藏文件）。

# 上传到其他仓库

```
git remote set-url origin 新仓库的地址
git push -u origin master
```