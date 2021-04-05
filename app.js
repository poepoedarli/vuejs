const app = Vue.createApp({
    data() {
        return {
            paragraphText : '',
            enteredText: ''
        }
    },
    methods: {
        showAlert(){
            alert("Hello World")
        },
        writeToParagraph(event){
            this.paragraphText = event.target.value;
            return this.paragraphText;
        },
        enterToParagraph(event){
            this.enteredText = event.target.value;
            return this.enteredText;
        }
    },
}).mount('#assignment');