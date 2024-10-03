const app = Vue.createApp({
    data() {
        return {
            hobbies: ['Gardening','Fishing','Travelling','Reading','Writing'],
            selectedHobbies: [],
        }
    },
    methods: {
        addHobby(hobby){
            const hobbyIndex = this.selectedHobbies.indexOf(hobby);
            if(hobbyIndex > -1){
                return this.removeDuplicate(hobby);
            }
            return this.selectedHobbies.push(hobby);
        },
        removeDuplicate(hobby){
            const hobbyIndex = this.selectedHobbies.indexOf(hobby);
            if(hobbyIndex > -1){
                this.selectedHobbies.splice(hobbyIndex,1);
            }
        }
    },
    computed:{
        selectedHobbiesString(){
           return this.selectedHobbies.join(', ');
        },
    }
});

app.mount("#app");