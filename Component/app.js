const app = Vue.createApp({
    data() {
        return {
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
        completeTodo(todo) {
            todo.done = true;
        },
        undoTodo(todo) {
            todo.done = false;
        },
    },
});

app.component('todo-component', {
    props: ['message', 'todo'],
    data() {
        return {
            msg: "This is from component",
        }
    },
    methods: {
        completeTodo(todo) {
            todo.done = true;
        },
        undoTodo(todo) {
            todo.done = false;
        },
    },
    template:
        `
        <div  class="card shadow p-3 mb-3 bg-light rounded">
            <div class="d-flex justify-content-between align-items-center">
                <h6>{{todo.text}}</h6>
                <small>{{message}}</small>
                <button type="button" v-if="todo.done" class="btn btn-success" v-on:click="undoTodo(todo)">Done</button>
                <button type="button" v-else class="btn btn-danger" v-on:click="completeTodo(todo)">Not Done</button>
            </div>   
            <small>{{msg}}</small>
        </div>
        `
});

app.mount("#app");