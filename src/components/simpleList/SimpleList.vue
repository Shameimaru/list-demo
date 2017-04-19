<template>
    <div class="container">
        <div :key="index" v-for="(title, index) in listTitles">
            <router-link :to="{name: '/ListDetail/:index', params: { index: index }}">{{ title }}</router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    export default {
        computed: {
            ...mapGetters(['listTitles'])
        }
    };
</script>

<style lang="less">
    @import "../../less/base";
    .container {
        width: 200px;
        margin: 0 auto;
        div {
            border-bottom: 1px solid black;
            cursor: pointer;
            &:hover {
                background-color: lightsalmon;
                color: white;
            }
            a {
                display: block;
            }
        }
    }
</style>
