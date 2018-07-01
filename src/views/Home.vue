<template>
  <div class="home">    
    <div class="row">
      <Sidebar/>
      <Content/>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large pulse"><i class="material-icons">cloud</i></a> 
      </div>
       
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Content from '@/components/Content.vue'

export default {
  name: 'home',
  components: {
    Sidebar,
    Content
  }
}
</script>

<style>

</style>
