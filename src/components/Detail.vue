<template>
    <div class="col s9" id="content">
        <h3>{{$route.params.title}}</h3> 
        <div class="card hoverable small blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">{{currArticle.title}}</span>
                <p>{{currArticle.content}}</p>
            </div>
        </div>
    </div>    
</template>

<script>
import {mapState,mapActions} from 'vuex'

export default {
    props:['title'],
    data() {
        return {
           currArticle:[]
        }
    },
    created() {
        this.getArticles()
        
    },
    watch: {
        '$route' (to, from) {
            this.checkTitle()
        }
    },
    mounted() {
        this.checkTitle()
    },
    computed:{
        ...mapState([
            'articles'
        ])
    },
    methods:{
       ...mapActions([
           'getArticles'
       ]),
       checkTitle() {
           console.log(this.articles,"====hoho");
           
           for(let i=0;i<this.articles.length;i++) {
               if(this.articles[i].title == this.$route.params.title) {
                   this.currArticle = this.articles[i]
               }
           }
       } 
    }
}
</script>

