<!-- 
    @Author: Jam.Zhu 
    @Date: 2018/12/15
    @Project: BeautyAdmin        
-->
<template>
    <section id="app">
        <section class="app_menus">
            Menus
        </section>
        <section class="app_container">
            <common-header></common-header>
            <router-view class="app_content"></router-view>
        </section>
    </section>
</template>

<script>
    import { mapState } from 'vuex'

    import { CommonHeader } from 'components'
    export default {
        name: "index",
        components: {
            CommonHeader
        },
        computed: {
            ...mapState({
                menus: ({menuStore}) => menuStore.menus
            })
        },
        data(){
            return {}
        },
        mounted(){

        }
    }
</script>

<style lang="scss">
    #app {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: #efefef;
    }

</style>