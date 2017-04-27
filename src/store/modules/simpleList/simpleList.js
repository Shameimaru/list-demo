/**
 * Created by Administrator on 2017/4/19.
 */
import * as types from './mutation_types';

const defaultData = [{
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

const state = {
    listdata: [],
    loading: false
};

const getters = {
    listTitles: ({ listdata }) => listdata.map((item) => item.title),
    listdata: ({ listdata }) => listdata,
    loading: ({ loading }) => loading
};

const actions = {
    [types.INIT_DATA]({ commit }) {
        commit(types.CHANGE_LOADING, true);
        setTimeout(() => {
            commit(types.CHANGE_LOADING, false);
            commit(types.LOAD_DATA, defaultData);

        }, 3000);
    },
    [types.DELETE_COMMENT]({ commit }, payload) {
        commit(types.DELETE_COMMENT, payload);
    },
    [types.ADD_COMMENT]({ commit }, payload) {
        commit(types.ADD_COMMENT, payload);
    }
};

const mutations = {
    [types.INIT_DATA](state, payload) {
        state.listdata = payload;
    },
    [types.DELETE_COMMENT]({ listdata }, { entryIndex, commentIndex }) {
        listdata[entryIndex].comments.splice(commentIndex, 1);
    },
    [types.ADD_COMMENT]({ listdata }, { entryIndex, commentText }) {
        listdata[entryIndex].comments.push(commentText);
    },
    [types.CHANGE_LOADING](state, isLoading) {
        state.loading = isLoading;
    },
    [types.LOAD_DATA](state, data) {
        state.listdata = data;
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
