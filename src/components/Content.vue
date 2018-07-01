<template>
    <div class="col s9" id="content">
        <h3>Home</h3> 
        <div class="card hoverable small blue-grey darken-1" v-for="(article,index) in articles" :key="index">
            <div class="card-content white-text">
                <span class="card-title">{{article.title}}</span>
                <p>{{article.content}}</p>
            </div>
            <div class="card-action">
                <router-link :to="`/content/${article.title}`">Read More</router-link>
            </div>
        </div>
    </div>    
</template>

<script>

import axios from 'axios'
import { mapState, mapActions } from "vuex";

export default {

    created() {
        this.getArticles()
    },
    computed: {
        ...mapState([
            "articles"
        ])
    },
    methods: {
        ...mapActions([
            "getArticles"
        ]),
        
    }
}
</script>
