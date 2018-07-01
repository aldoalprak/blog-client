<template>

    <div>
    asdasd
    </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
    created() {
        this.getArticles()
    },
    methods:{
        ...mapState([
            'getArticles'
        ])
    }
}
</script>

