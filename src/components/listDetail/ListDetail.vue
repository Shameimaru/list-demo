<template>
    <div class="list-container">
        <div><router-link :to="{name: 'SimpleList'}">返回</router-link></div>
        <div class="entry">
            <h3>{{ entry.title }}</h3>
            <div class="photo" :style="{backgroundImage: `url(${ require(`../../assets/images/${ entry.photo }`) })`}"></div>
            <div class="comments">
                <div class="comment" v-for="(comment, commentIndex) in entry.comments">
                    <template>
                        {{ comment }}
                        <span class="del-btn" @click="deleteCommentHandler({ entryIndex: index, commentIndex })"> x </span>
                    </template>
                </div>
                <div class="comment-ipt">
                    <input v-focus type="text" placeholder="添加评论" v-model="commentText" @keyup.enter.prevent="addCommentHandler({ entryIndex: index, commentText })" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data: function() {
            return {
                commentText: ''
            }
        },
        props: [
            'index',
            'entry',
            'deleteCommentHandler',
            'addCommentHandler'
        ],
    }
</script>

<style lang="less" scoped="scoped">
    @import '../../less/base';
    .list-container {
        margin: 10px;
        .entry {
            border-bottom: 2px solid #2b99ff;
            padding: 15px;
            &::after {
                content: '.';
                display: block;
                clear: both;
                height: 0;
                visibility: hidden;
            }
            .photo {
                width: 200px;
                height: 200px;
                border: 1px solid black;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: center center;
                margin-right: 15px;
                float: left;
            }

            .comments {
                float: right;
                width: 520px;

                .comment-ipt {
                    input {
                        position: relative;
                        box-sizing: border-box;
                        width: 100%;
                        border: 1px solid #2973b7;
                        padding-left: 16px;
                        line-height: 1.5;
                        margin-bottom: 10px;
                    }

                }

                div {

                    &.comment {
                        position: relative;
                        box-sizing: border-box;
                        width: 100%;
                        border: 1px solid #2973b7;
                        border-left: 8px solid #2973b7;
                        padding-left: 8px;
                        line-height: 1.5;
                        margin-bottom: 10px;
                    }

                    .del-btn {
                        position: absolute;
                        right: 0;
                        top: 0;
                        border-left: 1px solid #2b99ff;
                        border-bottom: 1px solid #2b99ff;
                        cursor: pointer;
                        box-sizing: border-box;
                        width: 12px;
                        height: 12px;
                        font-size: 12px;
                        text-align: center;
                        vertical-align: top;
                        line-height: 8px;
                    }
                }
            }
        }

    }
</style>
