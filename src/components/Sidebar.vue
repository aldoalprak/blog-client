<template>
    <div class="col s3" id="sidebar"> <!-- Note that "m4 l3" was added -->
        <ul id="slide-out" class="sidenav sidenav-fixed">
            <li><div class="user-view">
                    <div class="background">
                        <img src="https://2.bp.blogspot.com/-f1lVE6dZO5o/VMekdVmR4qI/AAAAAAAAOfY/IB7HjtXucNA/w800-h800/Full%2BComputer%2BSize%2BMaterial%2BDesign%2BWallpaper%2B(1).jpg">
                    </div>
                    <router-link :to="'/'"><img class="circle" src="https://wallpapercave.com/wp/MOyrUQC.jpg"></router-link>
                    <span class="white-text name">Aldo Prakoso</span>
                    <span class="white-text email">alprak93@gmail.com</span>
                    <a v-if="adminStatus == true" href class="waves-effect waves-light white-text"  @click="logout()">LogOut</a>
                </div></li>
            <li><router-link :to="'/'"><i class="material-icons">cloud</i>Welcome to my Blog</router-link></li>
            <li><div class="divider"></div></li>
            <li><a class="subheader">Digital World</a></li>
            <div v-for="(article,index) in articles" :key="index">
                <li><router-link :to="`/content/${article.title}`">{{article.title}}</router-link></li>
            </div>
            
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger" @click="sideNavJs()"><i class="material-icons">menu</i></a>
    </div>
</template>

<script>

import axios from 'axios'
import { mapActions, mapState} from 'vuex'

export default {
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
    computed:{
        ...mapState([
            'articles'
        ])
    },
    methods:{
        ...mapActions([
            'getArticles'
        ]),
        logout() {
            localStorage.clear()
            this.$router.push('/')
        },
        sideNavJs() {
            var elems = document.querySelectorAll('.sidenav');
            var instances = M.Sidenav.init(elems);
        }
    }

}
</script>
