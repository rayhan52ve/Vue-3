const app = Vue.createApp({
    data() {
        return {
            todos: [
                { text: "Buy Milk", done: true },
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

app.mount("#app");