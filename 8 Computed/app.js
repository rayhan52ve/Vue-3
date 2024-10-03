const app = Vue.createApp({
    data(){
        return{
            fname:"",
            lname:"",
        }
    },
    computed:{
        fullname(){
            return `${this.fname} ${this.lname}`;
        },

        fnameLength(){
            return this.fname.length;
        },

        lnameLength(){
            return this.lname.length;
        },

        fullnameLength(){
            return this.fullname.trim().length;
        },
    },
});

app.mount("#app");