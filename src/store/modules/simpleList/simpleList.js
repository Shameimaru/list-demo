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
    listdata: defaultData
};

const getters = {
    listTitles: ({ listdata }) => listdata.map((item) => item.title),
    listdata: ({ listdata }) => listdata
};

const actions = {
    [types.INIT_DATA]({ commit }, payload) {
        commit(types.INIT_DATA, payload);
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
    }
};

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
