<template>
    <div>
        <Navbar :title='selfTitle'></Navbar>
        <div>profile</div>
    </div>
</template>
<script>
import Navbar from 'components/common/Navbar'
export default {
    name:'Profile',
    data(){
        return{
            selfTitle:'我的'
        }
    },
    components:{
        Navbar
    }
}
</script>
<style scoped>

</style>