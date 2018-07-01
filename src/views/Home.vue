<template>
  <div class="home">    
    <div class="row">
      <Sidebar/>
      <Content/>
      <div class="fixed-action-btn" v-if="adminStatus == true">
            <button @click="addArticle()" class="btn-floating btn-large waves-effect waves-light red lighten-2 pulse"><i class="material-icons">add</i></button> 
      </div>>
       
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src

import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'home',
  components: {
    Sidebar,
    Content
  },
  data(){
    return {
      adminStatus:false
    }
  },
  created() {
    if(localStorage.hasOwnProperty('token')){
      console.log(this.adminStatus);
      this.adminStatus = true
    }else{
      this.adminStatus = false
    }
  },
  methods: {
    addArticle() {
      this.$router.push("/add")
    }
  }
}
</script>

<style>

</style>
