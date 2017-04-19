import Vue from 'vue';
import Router from 'vue-router';
import SimpleList from '@/components/simpleList/SimpleList';
import ListDetail from '@/components/listDetail/ListDetail'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'SimpleList',
            component: SimpleList
        }, {
            path: '/ListDetail/:index',
            name: '/ListDetail/:index',
            component: ListDetail,
            props: true
        }
    ]
})
