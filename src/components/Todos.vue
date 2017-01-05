<template>
    <div class="todos">
        <ul class="list-group" >
            <li class="list-group-item"
                v-for="(todo,index) in todos"
            >
                <router-link
                        :to="{ name: 'todo', params: { id: todo.id }}"
                        :class="{ 'completed':todo.completed }">{{todo.title}}</router-link>

                <button class="btn btn-warning btn-xs pull-right"
                        @click="deleteTodo(todo,index)"
                >Delete</button>
                <button class="btn btn-info btn-xs pull-right"
                        :class="[todo.completed ? 'btn-danger':'btn-success']"
                        @click="toggleCompletion(todo)"
                >
                    {{todo.completed?'undo':'completed'}}
                </button>
            </li>

        </ul>
        <todo-form></todo-form>
    </div>

</template>
<style>
    .completed{
         color:red
    }
</style>
<script>
    import TodoForm from './TodoForm'
    export default{
        name:'todos',
        computed: {
            todos() {
                return this.$store.state.todos
            }
          },
        methods:{
            deleteTodo:function (todo,index) {
                console.log(index);
                this.$store.dispatch('deleteTodo',{todo,index});
            },
            toggleCompletion:function (todo) {
                this.$store.dispatch('completeTodo',todo);
            }
        },
        components: {
            TodoForm
        }
    }
</script>
