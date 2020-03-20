<template>
    <van-nav-bar
  :title="title"
  left-text="返回"
  left-arrow
  @click-left="onClickLeft"
/>
</template>
<script>
export default {
    name:'Navbar',
    data(){
        return{}
    },
    props:{
        title:{
            type:String
        },

    },
    methods:{
        onClickLeft(){
            this.$router.back()
        },
        onClickRight(){
            this.$router.forward()
        }
    }
}
</script>
<style scoped>

</style>