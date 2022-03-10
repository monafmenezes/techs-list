<template>
    <div class="container">
        <router-view :techs="techs"  ></router-view>
    </div>
</template>

<script>
    export default{

         data() {
            return {
                titulo: "Saiba mais sobre as Techs:", 
                techs: [],
                techSelect: {}
            }
        },
    
        created(){
    
        this.$http.get('http://localhost:3000/techs')
            .then(response => response.json())
            .then(techs => this.techs = techs, err => console.log(err))
        }, 

      
       
    }
</script>

<style>
    * {
        margin: 0;
        
    }

    .container {
        background-color: rgb(217, 186, 243);
        height: 100vh;
        font-family: sans-serif;
        text-align: center;
        padding: 20px;
        color: rgb(59, 57, 57);
    }
</style>
