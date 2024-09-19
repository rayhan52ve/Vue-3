const app = Vue.createApp({
    data() {
        return {
            email:"",
            isEmail: false
        }
    },
    watch:{
        email(val,oldval){
            this.isEmail = val.includes('@');
        }
    },
});

app.mount("#app")