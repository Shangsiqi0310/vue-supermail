import Vue from 'vue' //引入vue
import App from './App.vue' //引入组件

//mint-ui的引入
import 'mint-ui/lib/style.css'
import MintUI from 'mint-ui' //引入包 全部引入
Vue.use(MintUI)

//mui的引入
import './assets/mui/css/mui.min.css'
import './assets/mui/css/icons-extra.css'

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