/**
 * Created by Administrator on 2017/4/21.
 */
import Vue from 'vue';
Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    }
});
