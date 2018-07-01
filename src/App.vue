<template>
  <div id="app">
    <router-view/>
      <div class="fixed-action-btn">
        <button @click="addArticle()" class="btn-floating btn-large waves-effect waves-light red lighten-2 pulse"><i class="material-icons">add</i></button> 
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    addArticle() {
      this.$router.push("/add")
    }
  }
}
</script>
