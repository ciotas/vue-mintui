<template>
    <form @submit.prevent="addTodo(newTodo)">
        <div class="form-group">
            <input type="text"
                   v-model="newTodo.title"
                   class="form-control"
                   placeholder="add a new tod">
        </div>
        <div class="form-group">
            <button class="btn btn-success" type="submit">Add Todo</button>
        </div>
    </form>
</template>
<style>
</style>
<script>

    export default{
        computed:{
            newTodo(){
                return this.$store.state.newTodo
            }
        },
        methods:{
            addTodo:function (newTodo) {
                this.$store.dispatch('addTodo',newTodo);
            }
        }
    }
</script>
