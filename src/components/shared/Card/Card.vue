<template>
     <div class="container-card">
            
            <img :src="url" :alt="title">
            <h5>{{title}}</h5>
            <p>{{description}}</p>

     </div>
</template>

<script>
export default {
    props: ['title', 'url', 'description']
    
   
}
</script>

<style escoped>

    .container-card {
        width: 50%;
        height: 70%;
        background-color: blueviolet;
        margin: 0 auto;
        font-family: sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 18px;
        border-radius: 5px;
        color: #FFFFFF;
        margin-top: 30px;
        justify-content: center;
       
    }

    .container-card img {
        width: 200px;
        height: 200px;
        margin-bottom: 10px;
    }

    

   

</style>