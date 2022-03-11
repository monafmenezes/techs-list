<template>
    <div class="container-dashboard">
        <nav>
            <h1> ID: {{list.id}}</h1>
            <router-link class="link" to="/">Home</router-link>
        </nav>

        <Card :title="list.title"  :id="list.id"/>

       
    </div>
</template>

<script>
import Card from '../../components/shared/Card/Card.vue'
import axios from 'axios'

export default{
    data() {
        return{
            id: this.$route.params.id,
            list: ''
        }
    },

    components: {
        Card: Card
    },

    created() {
        axios.get(`https://jsonplaceholder.typicode.com/todos/${this.id}`, this.list)
            .then((res => this.list = res.data ))
            .catch(err => console.log(err))
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