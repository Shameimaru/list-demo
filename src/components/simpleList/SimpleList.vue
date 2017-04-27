<template>
    <div class="container">
        <div v-if="loading"><h1>Loading...</h1></div>
        <div v-else :key="index" v-for="(title, index) in titles">
            <router-link :to="{
                    name: '/ListDetail/:index',
                    params: {
                        index,
                        entry: data[index],
                        deleteCommentHandler,
                        addCommentHandler
                    }
                }">{{ title }}</router-link>
        </div>
    </div>
</template>

<script>
    import { mapGetters, mapActions } from 'vuex';
    import * as types from '../../store/modules/simpleList/mutation_types';
    export default {
        computed: {
            ...mapGetters('simpleList', {
                loading: 'loading',
                titles: 'listTitles',
                data: 'listdata',
            })
        },
        methods: {
            ...mapActions('simpleList', {
                deleteCommentHandler: [types.DELETE_COMMENT],
                addCommentHandler: [types.ADD_COMMENT]
            })
        },
        created() {
            this.$store.dispatch('simpleList/INIT_DATA')
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
