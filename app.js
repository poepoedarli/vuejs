Vue.createApp({
  data() {
    return {
      currentAge : 30,
      nextFiveYearAge : 0,
      name: 'Poe',
      imageUrl : 'https://images.unsplash.com/photo-1615524340081-7187a9a28b76?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
    };
  },
  methods: {
    nextFiveYears(){
      this.nextFiveYearAge = this.currentAge + 5;
      return this.nextFiveYearAge;
    },
    getRandomNumber(){
        return Math.random(0,1);
    }
    
  }
}).mount("#assignment");
