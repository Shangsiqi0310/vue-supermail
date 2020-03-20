<template>
    <div id='cart'>
        <Navbar :title='selfTitle'></Navbar>
        <div>购物车</div>
    </div>
</template>
<script>
import Navbar from 'components/common/Navbar'
export default {
    data(){
        return {
            selfTitle:'购物车'
        }
    },
    components:{
        Navbar
    }
}
</script>
<style scoped>

</style>