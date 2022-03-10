<template>
    <div>
        <Display :techs="techs" :techSelect='techSelect' ></Display>
    </div>
</template>

<script>

import Display from '../../components/shared/Display/Display.vue'

export default{

    props:['techs', 'techSelect'],

    components: {
        Display: Display
    }, 

   
   
}

</script>

<style scoped>

</style>