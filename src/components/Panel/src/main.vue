<!-- 
    @Author: Jam.Zhu 
    @Date: 2018/12/16
    @Project: BeautyAdmin        
-->
<template>
    <section class="b_panel">
        <header class="b_panel_header">
            <slot name="header">
                <p class="b_panel_title"><i :class="icon"></i>&nbsp;{{title}}</p>
            </slot>
        </header>
        <section class="b_panel_body">
            <slot></slot>
        </section>
    </section>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                default: '标题'
            },
            icon: {
                type: String,
                default: ''
            }
        }
    }
</script>

<style lang="scss">
    @import "style";
</style>