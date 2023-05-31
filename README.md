# wade-cli

```
# 查看版本号
node bin/enter.js -v

# 运行创建命令
node bin/enter.js create <app name>
node bin/enter.js init <app name>

# 下载指定的模板
node bin/enter.js init <app name> -t [url]

# 查看项目信息
node bin/enter.js ls
```



## 开发目的

获取不同框架下的通用模板，方便后续新项目的开发（处于刚开始的情况，目前只整了点皮毛）



## 本地使用

```
git clone git@github.com:wulawulalei/wade-cli.git
```



## 依赖包

1. commander：用于自定义命令
2. inquirer：用于跟用户交互获取信息
3. chalk：用于修改输出样式
4. ora：用于显示loading
5. readline：用于逐行获取流