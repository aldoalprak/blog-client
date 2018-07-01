import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    articles:[]
  },
  mutations: {
    SET_ARTICLES(state,payload) {
      console.log("msk mtate");
      
      state.articles = payload
    }
  },
  actions: {

    getArticles({commit}, payload) {
      axios({
          method: "get",
          url: "http://localhost:3000/articles/show" 
      })
      .then(({data})=>{
          console.log("xxxxxxx",data.dataArticles);
          payload = data.dataArticles
          commit("SET_ARTICLES", payload)
          
      })
      .catch(err=>{
          console.log(err.message);        
      })
    }
  }
})
