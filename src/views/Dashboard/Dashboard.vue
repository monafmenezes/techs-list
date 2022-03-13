<template>
    <div class="container-dashboard">
        <nav>
            <router-link class="link" to="/">Home</router-link>
        </nav>

        <Card/>

       
    </div>
</template>

<script>
import Card from '../../components/shared/Card/Card.vue'
import {mapState} from 'vuex'

export default{
   
    components: {
        Card: Card
    }
    

   
}

</script>

<style scoped>

.container-dashboard {
    width: 100%;
    height: 100%;
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    text-align: center;
    color: white;
    
}

.container nav{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 90px;
    color: rgb(59, 57, 57);
    
}

.link {
    text-decoration: none;
    color: rgb(59, 57, 57);
}

</style>