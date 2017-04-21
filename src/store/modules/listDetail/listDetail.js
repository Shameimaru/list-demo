/**
 * Created by TataraYuuyami on 2017/4/14.
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
    listdata: ({ listdata }) => listdata
};

const actions = {
    [types.LIST_INIT_DATA]({ commit }, payload) {
        commit(types.LIST_INIT_DATA, payload);
    },
    [types.LIST_DELETE_COMMENT]({ commit }, payload) {
        commit(types.LIST_DELETE_COMMENT, payload);
    },
    [types.LIST_ADD_COMMIT]({ commit }, payload) {
        commit(types.LIST_ADD_COMMIT, payload);
    }
};

const mutations = {
    [types.LIST_DELETE_COMMENT]({ listdata }, { entryIndex, commentIndex }) {
        listdata[entryIndex].comments.splice(commentIndex, 1);
    },
    [types.LIST_INIT_DATA](state, payload) {
        state.listdata = payload;
    },
    [types.LIST_ADD_COMMIT]({ listdata }, { entryIndex, commentText }) {
        listdata[entryIndex].comments.push(commentText);
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
