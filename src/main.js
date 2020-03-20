import Vue from 'vue' //引入vue
import App from './App.vue' //引入组件

import { Tabbar, TabbarItem, NavBar } from 'vant'
Vue
    .use(Tabbar)
    .use(TabbarItem)
    .use(NavBar)


import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')

/*.$mount('#app')相当于el. 
使用render比使用template效率更高,
render的App替换index.html中id为app的标签,
这里不用定义components,因为引入的组件直接用render替换页面元素
*/