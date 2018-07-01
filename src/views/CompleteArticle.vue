<template>
  <div class="completeArticle">    
    <div class="row">
      <Sidebar/>
      <Detail/> 
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src

import Navbar from '@/components/Navbar.vue'
import Sidebar from '@/components/Sidebar.vue'
import Detail from '@/components/Detail.vue'

export default {
  name: 'completeArticle',
  components: {
    Navbar,
    Sidebar,
    Detail
  }
}
</script>