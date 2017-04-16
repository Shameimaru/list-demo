/**
 * Created by TataraYuuyami on 2017/4/14.
 */
const state = {
    listdata: [{
        title: 'this is title1',
        description: 'desc here',
        photo: '',
        comments: ['good', 'nice']
    }]
};

const getters = {
    listdata: ({ listdata }) => listdata
};

const actions = {};

const mutations = {};

export default {
    state,
    getters,
    actions,
    mutations
}
