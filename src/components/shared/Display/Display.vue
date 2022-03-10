<template>
    <div class="container-display">
        <h1>{{ titulo }}</h1>
        <ul >     
            <li class="container-list" v-for="item of list" :key="item.id" >
                <h3>{{item.title}}</h3>
                <router-link class="link" :to="{name: 'Dashboard', params: { id: item.id }}">Saiba mais</router-link>

            </li>
          
        </ul>
    </div>
</template>

<script>
    export default{
    
        props: ['list'],

        data(){
            return {
                titulo: 'Saiba mais sobre as techs',
            }
        },

    
    }


</script>

<style escoped>


   .container-display ul{
       display: flex;
      flex-direction: column;
      
       margin: 0 auto;
       list-style: none;
       
   }
    .container-display img {
        width: 150px;
        height: 150px;
    }

    .container-display li {

        margin: 5px;
        display: flex;
        flex-direction: column;
        align-items:  flex-start;
        justify-content: center;
      
    }
    

    .container-display .link {
       color: black;
        text-decoration: none;
    }
</style>
