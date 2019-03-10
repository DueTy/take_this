## Cruise

### 运行（已打包的文件dist）


```
npm install json-server
npm start
```
地址：localhost:8080

### dev&production
先安装

```
yarn  
npm install // 或者
```

#### dev

```
npm run mock
npm run dev
```

#### production

```
npm run dll
npm run production
```

### 目录结构
├─build
│      
├─dist
│  │  
│  └─static
│    
│                  
├─server
│      
├─src
│  │  
│  ├─assets
│  │  │  
│  │  ├─font icons
│  │  │          
│  │  ├─logo
│  │  │      
│  │  │          
│  │  └─os icons
│  │          
│  ├─common
│  │  ├─api
│  │  │      
│  │  ├─http
│  │  │      
│  │  ├─routes
│  │  │      
│  │  └─utils
│  │          
│  ├─components
│  │  │  
│  │  ├─agents
│  │  │      
│  │  ├─asider
│  │  │      
│  │  ├─blank
│  │  │      
│  │  ├─header
│  │  │      
│  │  ├─main-container
│  │  │      
│  │  └─popover
│  │          
│  ├─reducers
│  │      
│  └─routes
│          
└─static

### 项目说明
#### 构建-wepack4+
区分开发、生产

支持happy，dll打包，

***ps：** json-server的中间件貌似不支持webpack-dev-middleware和webpack-dev-middleware，弄了很久，还是没有达到热更新效果，索性dev的时候，分开运行，有空再回来研究

#### 技术栈-react + react-router

讲列表中的浮动表单做了封装，共用了一些样式。

***ps：** 引入了redux，但是功能偏少，加上周末有点匆忙，所以未使用redux进行状态管理

### 结语
抱歉现在才提交，中间有些地方卡主了，逗留了一些时间。

欢迎在review代码后能提出指出不足，给出修改意见。


