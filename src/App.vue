<template>
    <div class="container">
        <router-view :list="list" ></router-view>
    </div>
</template>

<script>
import axios from 'axios'
    export default{

         data() {
            return {
                titulo: "Saiba mais sobre as Techs:", 
                list: []
            }
        },
    
        created(){

            axios.get('https://jsonplaceholder.typicode.com/todos', this.list)
                .then(res => this.list = res.data)
                .catch(err => console.log(err))
    
        }

      
       
    }
</script>

<style>
    * {
        margin: 0;
        
    }

    .container {
        height: 100vh;
        font-family: sans-serif;
        text-align: center;
        padding: 20px;
        color: rgb(59, 57, 57);
    }
</style>
