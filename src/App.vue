<template>
    <div id="app">
        <h2>Photo List</h2>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: 'app',
        created() {
            this.$store.dispatch('simpleList/INIT_DATA')
        }
    }
</script>

<style lang="less" scoped="scoped">
    @import 'less/base';
    #app {
        width: 800px;
        margin: 0 auto;
        h2 {
            text-align: center;
        }
    }
    .fade-enter, .fade-leave-active {
        opacity: 0;
        transform: translateX(50px);
    }
    .fade-enter-active, .fade-leave-active {
        transition: all 500ms;
    }
</style>
