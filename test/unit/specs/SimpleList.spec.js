import Vue from 'vue';
import simpleList from '@/components/simpleList/SimpleList';
import poli from 'babel-polyfill';
import store from '@/store/store';
import router from '@/router';
import chai from 'chai';

chai.should();

describe('SimpleList.vue', () => {
    it('should render correct links', () => {
        const Constructor = Vue.extend(Object.assign({}, simpleList, {
            store,
            router
        }));
        const vm = new Constructor().$mount();
        for(let linkItem of vm.$el.querySelectorAll('a')) {
            linkItem.href.should.be.match(/^http:\/\/.*\/ListDetail\/\d$/i);
            linkItem.textContent.should.be.oneOf(['this is title1', '2222', 'werewr']);
        }
    });
});
