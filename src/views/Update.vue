<template>
  <div class="update">    
    <div class="row">
      <Sidebar/>
      <UpdateArticle/>  
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src


import Sidebar from '@/components/Sidebar.vue'
import UpdateArticle from '@/components/Update.vue'

export default {
  name: 'update',
  components: {
    Sidebar,
    UpdateArticle
  },
  created() {
    if(!localStorage.hasOwnProperty('token')){
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
