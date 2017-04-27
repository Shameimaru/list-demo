/**
 * Created by TataraYuuyami on 2017/4/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import simpleList from './modules/simpleList/simpleList';
import * as types from './mutation_types';

Vue.use(Vuex);

const actions = {
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
