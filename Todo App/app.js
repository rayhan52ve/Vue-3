const app = Vue.createApp({
    data() {
        return {
            newTodo: "",
            todos: [
                { text: "Buy Milk", done: false },
                { text: "Buy Fruits", done: false },
                { text: "Buy Veggies", done: false },
                { text: "Learn Vue Js", done: false },
                { text: "Play Games", done: false },
                { text: "Apply For Jobs", done: false },
            ],
        }
    },
    methods: {
        formHandler() {
            // this.todos.push({text: this.newTodo,done:false});
            this.todos.unshift({text: this.newTodo,done:false});
            this.newTodo = "";
        },
        removeTodo(todo){
            const index = this.todos.indexOf(todo);
            this.todos.splice(index,1);
        }
    },
});


app.component('todo-component', {
    props: ['todo'],
    methods: {
        completeTodo(todo) {
            todo.done = true;
        },
        undoTodo(todo) {
            todo.done = false;
        },
        deleteTodo(todo){
            this.$emit('delete-todo', todo);
        }
    },
    template:
        `
        <div  class="card shadow p-3 mb-3 bg-light rounded">
            <div class="d-flex justify-content-between align-items-center">
                <h6>{{todo.text}}</h6>
                <div>
                    <button v-if="todo.done" type="button" class="btn btn-success btn-rounded"
                        v-on:click="undoTodo(todo)"><i class='bx bxs-calendar-check'></i></button>
                    <button v-else type="button" class="btn btn-warning btn-rounded"
                        v-on:click="completeTodo(todo)"><i class='bx bx-transfer-alt'></i></button>
                    <button type="button" class="btn btn-danger btn-rounded mx-1"
                        v-on:click="deleteTodo(todo)"><i class='bx bx-calendar-x'></i></button>
                </div>   
            </div>   
        </div>
        `
});

app.mount("#app");