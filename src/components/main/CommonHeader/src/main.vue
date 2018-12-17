<template>
    <header class="common_header">
        <img :src="userInfo.avatar" alt="用户头像" class="common_header_avatar">
    </header>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: "CommonHeader",
        computed: {
            ...mapState({
                userInfo: state => state.userInfo
            })
        },
        data(){
            return {}
        }
    }
</script>

<style lang="scss">
    .common_header {
        height: 60px;
        line-height: 60px;
        background: #fff;
        margin-bottom: 8px;
        padding: 5px;
        &_avatar {
            width: 50px;
            height: 50px;
        }
    }

</style>