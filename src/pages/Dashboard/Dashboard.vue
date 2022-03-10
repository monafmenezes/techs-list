<template>
    <div class="container-dashboard">
        <nav>
            <h1>{{tech.name}}</h1>
            <router-link class="link" to="/">Home</router-link>
        </nav>

        <Card :title="tech.name" :url="tech.image" :description="tech.description"/>

       
    </div>
</template>

<script>
import Card from '../../components/shared/Card/Card.vue'

export default{
    data() {
        return{
            id: this.$route.params.id,
            tech: ''
        }
    },

    components: {
        Card: Card
    },

    created() {
        this.$http.get(`http://localhost:3000/techs/${this.id}`)
           .then(response => response.json())
           .then(tech => {
              
              this.tech = tech

           })
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