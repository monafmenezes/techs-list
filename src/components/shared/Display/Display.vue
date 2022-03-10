<template>
    <div class="container-display">
        <h1>{{ titulo }}</h1>
        <ul >     
            
            <li class="container-list" v-for="tech of techs" :key="tech.id" >
                <img :src="tech.image" :alt="tech.name">
                <h3>{{tech.name}}</h3>
                <router-link class="link" :to="{name: 'Dashboard', params: { id: tech.id }}">Saiba mais</router-link>

            </li>
          
        </ul>
    </div>
</template>

<script>
    export default{
    
        props: ['techs'],

        data(){
            return {
                titulo: 'Saiba mais sobre as techs',
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


   .container-display ul{
       display: flex;
       flex-wrap: wrap;
       max-width: 70%;
       margin: 0 auto;
       list-style: none;
       
   }
    .container-display img {
        width: 150px;
        height: 150px;
    }

    .container-display li {

        margin: 15px;
        width: 250px;
        height: 250px;
        background-color: blueviolet;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-radius: 8px;
    }
    .container-display li:hover{
        filter: brightness(0.9);
    }

    .container-display .link {
        color: white;
        text-decoration: none;
    }
</style>
