<template>
    <div>
        这是首页的内容区域
        <br>
        <button @click="getData">
            请求数据
        </button>
        <ul>

            <li v-for="it in list">
                {{ it }}
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    name: "Home",
    data() {
        return {
            msg: "这是一个内容",
            list: [],
        }
    },
    methods: {
        getData() {
            const api = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=php";
            this.$http.jsonp(api, {
                jsonp: "cb"
            }).then((data) => {
                console.log(data.body);
                this.list = data.body.s;
            }, () => {
            })
        }
    }
}
</script>
