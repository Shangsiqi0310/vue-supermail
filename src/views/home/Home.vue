<template>
    <div>
        <Navbar :title='selfTitle'></Navbar>
        <div>home</div>
    </div>
</template>
<script>
import Navbar from 'components/common/Navbar'
export default {
    name:'Home',
    data(){
        return{
            selfTitle:'首页'
        }
    },
    components:{
        Navbar
    }
}
</script>
<style scoped>

</style>