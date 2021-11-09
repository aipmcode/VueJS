new Vue({
  el: '#app',
  
  data () {
    return {
      courses:[],
      title:'',
      time:''
    }
  },
  
  computed: {
    totalTime(){
      if(!this.courses.length) {return 0}
      return this.courses.reduce((a,b) => a + parseInt(b.time),0)
    }
  },
  
  methods: {
    addCourse(){
      if(!this.title || !this.time) { return }
      
      this.courses.push({
        title: this.title, 
        time: this.time 
      })
      
      this.time=0
      this.title=''
    }
  }
})