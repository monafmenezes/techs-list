<template>
    <div class="container">
        <router-view :techs="techs" :techSelect="techSelect" ></router-view>
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
        }
       
    }
</script>

<style>

</style>
