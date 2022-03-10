<template>
    <div class="container">
        <h1>{{ titulo }}</h1>
        <ul class="container-list">
            
            <router-link to="/dashboard">
                <li v-for="tech of techs" :key="tech.id" @click="addTech(tech)">
                    <img :src="tech.image" :alt="tech.name">
                    <h3>{{tech.name}}</h3>
                </li>
            </router-link>

        </ul>
    </div>
</template>

<script>
    export default{
    
        props: ['techs', 'techSelect'],

        data(){
            return {
                titulo: 'Saiba mais sobre as techs'
            }
        },

        methods: {
            addTech(tech) {
                this.techSelect = tech
            }
        }


    }


</script>

<style escoped>
    img {
        width: 200px;
        height: 200px;
    }

    li {
        cursor: pointer;
    }

</style>
