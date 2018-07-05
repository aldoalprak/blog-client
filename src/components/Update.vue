<template>

    <div>
        <div class="col s9">
        <h2>Update Article</h2>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="title" class="materialize-textarea" v-model="title"></textarea>
                    <label for="title">Title</label>
                </div>
            </div>
            <div class="row">
                <div class="input-field col s12">
                    <textarea id="content" class="materialize-textarea" v-model="content"></textarea>
                    <label for="content">Content</label>
                </div>
            </div>
            <div class="row">
                <div class="col s2">
                    <button class="waves-effect waves-light btn" v-on:click="updateArticle()"><i class="material-icons left">email</i>Update</button>
                </div>
            </div>
        </div>  
    </div>
</template>

<script>
import { mapState,mapActions } from 'vuex';
import axios from 'axios'

export default {
    data() {
        return{
            title:"",
            content:""
        }
    },
    created() {
        this.getArticles()
        this.getOneArticle()
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
        getOneArticle() {
           axios({
               method:"get",
               url:"https://api_blog.alprak.net/articles/showone",
               headers:{
                   title: this.$route.params.title
               }
           })
           .then(response=>{
               console.log(response.data.dataArticle,"xxx");
               this.title = response.data.dataArticle[0].title
               this.content = response.data.dataArticle[0].content 
           })
       } ,
        updateArticle() {
            axios({
                method:"put",
                url:`https://api_blog.alprak.net/articles/update/${this.$route.params.title}`,    
                data: {
                    title:this.title,
                    content: this.content,
                },
                headers:{
                    token:localStorage.getItem("token")
                }
            })
            .then(response=>{
                console.log(response);
                swal(
                    'Article Updated!',
                    '.',
                    'success'
                )
                .then(()=>{
                    this.$router.push('/')
                })
                
            })
            .catch(err=>{
                console.log(err.message)
            })
        }   
    }
}
</script>

