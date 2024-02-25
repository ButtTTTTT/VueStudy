<template>
    <div id="header">
        <h1 class="header">{{ msg }}<button @click="run">按钮</button></h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg: "这是一个头部组件"
        }
    },
    methods: {
        run() {
            this.msg = "这是改变后的头部组件"
            console.log("Hello Vue App");
        }
    }
}
</script>
<style>
.header {
    width: 100%;
    height: 44px;
    line-height: 44px;
    text-align: center;
    background: #000;
    color: #fff;
}
</style>