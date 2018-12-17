<!-- 
    @Author: Jam.Zhu 
    @Date: 2018/12/15
    @Project: BeautyAdmin        
-->
<template>
    <section>
        <vue-canvas-nest :config="nestConfig"></vue-canvas-nest>
        <section class="login_container">
            <panel title="用户登录" icon="el-icon-share">
                <el-form :label-position="labelPosition" ref="loginFrom" :model="formLabelAlign" :rules="rules">
                    <el-form-item prop="name">
                        <el-input v-model="formLabelAlign.name" placeholder="请输入用户名"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input v-model="formLabelAlign.password" type="password" placeholder="请输入密码"></el-input>
                    </el-form-item>
                </el-form>
                <el-button type="primary" class="login_button" @click="login('loginFrom')">登录</el-button>
            </panel>
        </section>
    </section>
</template>

<script>
    import VueCanvasNest from 'vue-canvas-nest'

    import { Panel } from 'components'
    export default {
        components: {
            Panel,
            VueCanvasNest
        },
        name: "login",
        component: {
            VueCanvasNest
        },
        data(){
            return {
                nestConfig: {
                    color: '0,0,255',
                    count: 120,
                    opacity: 0.7,
                    zIndex: -1
                },
                labelPosition: 'right',
                formLabelAlign: {
                    name: 'admin',
                    password: ''
                },
                rules: {
                    name: [{required: true, message: '请输入用户名'}],
                    password: [{required: true, message: '请输入密码'}]
                }
            }
        },
        methods: {
            login(formName){
                this.$refs[formName].validate(valid => {
                    if (!valid) {
                        this.$message.error('用户名或密码错误')
                    } else {
                        this.$router.replace('index')
                    }
                })
            }
        }
    }
</script>

<style lang="scss">
    .login_container {
        width: 300px;
        background: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .login_button {
        width: 100%;
    }

</style>