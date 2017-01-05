import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Todos from './components/Todos'
import Todo from './components/Todo'
import Hello from './components/Hello.vue'

const routes = [
    { path: '/', component: Todos },
    { path: '/todo/:id', component: Todo, name:'todo' },
    { path: '/hello', component: Hello }
];

export default new VueRouter({
    routes, // （缩写）相当于 routes: routes
    history: true, //html5模式 去掉锚点
    saveScrollPosition: true //记住页面的滚动位置 html5模式适用
});