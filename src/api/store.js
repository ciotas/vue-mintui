import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);
Vue.use(Vuex);

const state = {
    todos: {},
    newTodo:{id:null,title:'',completed:false}
}
const mutations = {
    get_todo_list (state,todos) {
        state.todos = todos;
    },
    complete_todo(state,todo){
        todo.completed = !todo.completed;
    },
    delete_todo(state,index){
        state.todos.splice(index,1);
    },
    add_todo(state,todo){
        state.todos.push(todo);
    }
}
const actions = {
    getTodos(store){
        Vue.axios.get('http://localhost:8000/api/tasks').then((response) => {
            console.log(response.data)
            store.commit('get_todo_list',response.data);
        })
    },
    completeTodo(store,todo){
        Vue.axios.patch('http://localhost:8000/api/tasks/'+todo.id+'/compete').then((response)=>{
            console.log(response.data)
            store.commit('complete_todo',todo);
        });
    },
    deleteTodo(store,{todo,index}){

        Vue.axios.delete('http://localhost:8000/api/tasks/'+todo.id+'/delete').then((response)=>{
            // console.log(response.data)
            console.log(index)
            store.commit('delete_todo',index);
        });
    },
    addTodo(store,todo){
        Vue.axios.post('http://localhost:8000/api/tasks/create',{title:todo.title}).then((response)=>{
            console.log(response.data)
            store.commit('add_todo',response.data);
        });
        store.state.newTodo = {id:null,title:'',completed:false}
    }
};

export default new Vuex.Store({
        state,
        actions,
        mutations
});
