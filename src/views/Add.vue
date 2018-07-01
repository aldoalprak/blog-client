<template>
  <div class="add">    
    <div class="row">
      <Sidebar/>
      <AddArticle/>  
    </div>
  </div>  
</template>

<script>
// @ is an alias to /src


import Sidebar from '@/components/Sidebar.vue'
import AddArticle from '@/components/Add.vue'

export default {
  name: 'add',
  components: {
    Sidebar,
    AddArticle
  }
}
</script>

<style>

</style>
