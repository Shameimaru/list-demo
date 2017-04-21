/**
 * Created by Administrator on 2017/4/19.
 */
import * as types from './mutation_types';

const state = {
    listTitles: ['this is title1', '2222', 'werewr']
};

const getters = {
    listTitles: ({ listTitles }) => listTitles
};

const actions = {
    [types.SIMPLELIST_INIT_DATA]({ commit }, payload) {
        commit(types.SIMPLELIST_INIT_DATA, payload);
    }
};

const mutations = {
    [types.SIMPLELIST_INIT_DATA](state, payload) {
        state.listTitles = payload.map((entry) => entry.title)
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
