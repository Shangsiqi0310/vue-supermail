import axios from 'axios'

const axInstance = axios.create({
    baseURL: 'http://123.207.32.32:8000', //创建一个axios对象,并设置配置要访问的服务器,等配置
    timeout: 5000
})
export function axRequestOne(config) { //输出一个访问这个服务器,获取数据的函数,凡是访问跟这个axios配置相同的请求,都调用这个方法并传参
    axInstance.interceptors.request.use(config => { //请求拦截:在请求过程中对数据的同一处理
        return config
    }, err => {
        return err
    })

    axInstance.interceptors.response.ues(res => { //响应拦截,axios会自动为请求回来的结果添加一些其他的属性返回res.data只返回结果
        return res.data
    }, err => {
        return err
    })
    return axInstance(config)
}
/*请求发送放回一个promise对象作为方法的返回值,这样在其他模块中掉请求数据调用封装的方法
得到promise对象通过.then()得到服务端的值*/