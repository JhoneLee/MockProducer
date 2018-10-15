/*
* @Author: liyunjiao
* @Date:   2018-06-05 16:20:53
* @Last Modified by:   liyunjiao2048@163.com
* @Last Modified time: 2018-10-15 17:25:31
*/

import Vue from "vue";
import App from './App';
import router from './routes';
import store from './vuex/store';
console.log('sfjksdfjdksfjkds')
new Vue({
    el:'#app',
    router,
    store,
    render(h){
        return h(App)
    }
});