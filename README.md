# myvueproject

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 页面构建过程:
通过vue脚手架创建项目,项目的初始化,使用vant第三方组件开发页面

### 遇到问题:

#### 首先要知道:
当使用this.$router.back()/go()/forward()实现页面的跳转时
不会重新渲染页面只会从缓存中拿到页面

#### 问题:
当点击每个navbar的返回时调用this.&router.back()
并不会改变选中的tabbar,这就需要监测活跃的route来改变当前选中的tabbar
用到watch $route.path 监测路由
```
watch:{
        '$route.path':{
            handler(){
                console.log(1);
                
                this.getPath()
                
            }
        }
    }
```
