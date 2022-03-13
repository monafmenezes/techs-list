<template>
    <div class="container-display">
        <ul >     
            <li class="container-list" v-for="item of list" :key="item.id" >
                <h3>{{item.title}}</h3>
                <router-link class="link"   :to="{name: 'Dashboard'}">
                    <button @click="submit(item)">Saiba mais</button>
                </router-link>
            </li>
          
        </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

    export default {
     
       computed: {
           ...mapState({
               list: state => state.list,
               selectList: state => state.selectList
           }),

           
           
 
       },
       created(){
            this.ActionGetList()
           
            

        },
        methods: {
            ...mapActions(['ActionGetList']),
            ...mapActions(['ActionSetSelectList']),

            submit(listItem){
                this.ActionSetSelectList(listItem)
            }
            
    
        }

        
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
