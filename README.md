# Goby
基于next的中间层解决方案

> 技术栈：node+next 

### 运行
``` bash
//安装项目依赖
npm install

//开发
npm run dev

//打包
npm run build

//打包并启动中间层服务
npm run start 
```

项目暂时无法独立运行，需要更改apis/domains.js中的相关域名为自己的前端项目请求路径；
目前菜单是写死的，可以自己写请求获取数据；
api请求目前统一返回500，可在server.js中自行做代理，方法与/fonts相同。