# gshop

> my vue project

## Build Setup

```bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

1.使用 npm run lint -- --fix 来修复 eslint 的规范

2.在index.html中引入iconfont的时候，链接地址既不能加http：也不能加https，否则不能显示

3.路由切换，下面的footer中动态添加激活类，通过给元素绑定类名的方式来实现，v-bind后面接对象的形式，对象的属性用js的表达式，判断条件是通过$route.path即当前的路由的地址

4,抽取公共组件的时候，各个页面使用这个组件的情况不一定是一样的，这时候，通用的部分就留在组件的结构当中，用父子传值props的方式去传值，形成每个页面自己的文本；而结构不通用的部分，则通过预留一个slot插槽的方式来在各自的页面中去自定义编写（各个slot用name属性来区分，将来在各个页面书写的时候，则给结构的标签添加slot="刚刚在插槽中设定的name的属性值"，这样来形成每个页面使用这个组件但是又各不一样的效果）

5，上午最开始我们就复习过，实现路由的跳转，要么自己定义一个事件，事件触发之后，在事件中用this.$router.push()或者this.$router.replace()来跳转，要么用router-link 标签结合它的to属性来实现点击跳转。

6,在路由配置中，每个对应的路由配置选项可以增加一个meta属性，在meta这个属性的属性值中（属性值是一个对象），我们增加一个布尔类型的键值对作为开关，那么在该路由的页面中，对于页面结构的某些部分，我们就可以通过条件渲染来控制这些部分的显示和隐藏，而条件就是通过this.$route.meta.刚设定的开关名称

7,用版本控制工具git管理起来，git init初始化， git add .提交本底暂存，git commit -m '本次开发的信息'

8，介绍项目：是一个前后端分离的spa应用，有哪些功能模块，项目中用到的技术，项目的开发模式，模块化、组件化、工程化。

9,一开始不设置BASE_URL，会造成发送请求的地址跟前端应用的地址一样，这显然是不可能的，比方说前端是8080，后端服务器的地址可能是4000，所以要手动去设置请求的地址，但是设置了之后，就会出现新的问题，那就是跨域了。接下来就是配置代理解决跨域,在config文件夹下的index.js中path相关配置下添加如下代码，并重新启动项目
  ```
   proxyTable: {
      '/api':{//匹配所有以api开头的请求路径
        target:'http://localhost:4000', //目标，就是我们要代理的目标地址
        changeOrigin:true, //设置允许跨域
        pathRewrite:{//路径重写，去掉路径中开头的‘./api’
          '^/api':''
        }
      }
    },
  ```