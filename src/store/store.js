/**
 * Created by TataraYuuyami on 2017/4/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
import list from './modules/list/list';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        list
    }
})
