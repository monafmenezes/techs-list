<template>
    <div class="container">
        <router-view :list="list" ></router-view>
    </div>
</template>

<script>
    export default{

         data() {
            return {
                titulo: "Saiba mais sobre as Techs:", 
                list: []
            }
        },
    
        created(){
    
        this.$http.get('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(list => this.list = list, err => console.log(err))
        }, 

      
       
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
