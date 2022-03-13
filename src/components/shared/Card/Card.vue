<template>
     <div class="container-card">
            
            <p>ID: {{selecList.id}}</p>
            <h5>Tílulo: {{selecList.title}}</h5>

     </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
     computed: {
           ...mapState({
                selecList: state => state.selectList
           })
 
       }
    
   
}
</script>

<style escoped>

    .container-card {
        width: 50%;
        height: 70%;
        margin: 0 auto;
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        border-radius: 5px;
        margin-top: 30px;
        justify-content: center;
        color: black;
       
    }

    .container-card img {
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
    }

    

   

</style>