<template>
    <div id='tabbar'>
        <van-tabbar v-model="active"  @change='tabChange'>
            <van-tabbar-item name="home" icon="wap-home">首页</van-tabbar-item>
            <van-tabbar-item name="star" icon="star">喜欢</van-tabbar-item>
            <van-tabbar-item name="cart" icon="shopping-cart">购物车</van-tabbar-item>
            <van-tabbar-item name="profile" icon="manager">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>
<script>


export default {
    data(){
        return {
             active:'home'         //active的值要随着route的改变而改变,不是默认就是首页
            
        }
    },
    methods:{
        tabChange(index){
            this.$router.push('/'+index)
            
        },
        getPath(){
            this.active=this.$route.path.split('/')[1];
            
        }
    },
    created(){
        this.getPath()
    },
    watch:{
        '$route.path':{
            handler(){
                console.log(1);
                
                this.getPath()
                
            }
        }
    }
   
}
//因为active的值就是当前选中的tabbar,为了满足不只有在点击时才会切换tabbar就要监听
</script>
<style scoped>

</style>
