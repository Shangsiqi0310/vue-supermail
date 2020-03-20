<template>
   <div>
        <Navbar :title='selfTitle'></Navbar>
        <div>star</div>
    </div>
</template>
<script>
import Navbar from 'components/common/Navbar'
export default {
    name:'Star',
    data(){
        return{
            selfTitle:'喜欢'
        }
    },
    components:{
        Navbar
    }
}
</script>
<style scoped>

</style>