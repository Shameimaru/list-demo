/**
 * Created by TataraYuuyami on 2017/4/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import simpleList from './modules/simpleList/simpleList';
import * as types from './mutation_types';

Vue.use(Vuex);

const mock_data = [{
    title: 'this is title1',
    description: 'desc here',
    photo: '2.png',
    comments: ['good', 'nice']
}, {
    title: '2222',
    description: 'desc here',
    photo: '3.png',
    comments: ['good', 'nice']
}, {
    title: 'werewr',
    description: 'desc here',
    photo: 'compass.jpg',
    comments: ['good', 'nice', 'it is a comment', 'it is a comment', 'it is a comment', 'it is a comment', 'it is a comment']
}];

const actions = {
    [types.INIT_DATA]({ dispatch }) {
        dispatch('simpleList/INIT_DATA', mock_data);
    }
};

const mutations = {
};

export default new Vuex.Store({
    modules: {
        simpleList
    },
    actions,
    mutations
})
