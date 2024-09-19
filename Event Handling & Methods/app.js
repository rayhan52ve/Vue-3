Vue.createApp({
    data() {
        return {
            name: "Increase and Decrease Counter On Click",
            counter: 1,
        }
    },
    methods: {
        increaseCounter() {
            this.counter++
        },
        decreaseCounter(){
            this.counter--
        }
    },
}).mount('#app');