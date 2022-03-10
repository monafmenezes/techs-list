<template>
    <div>
        <Display :techs="techs"></Display>
    </div>
</template>

<script>

import Display from '../../components/shared/Display/Display.vue'

export default{

    props:['techs'],

    components: {
        Display: Display
    }, 

   
   
}

</script>

<style scoped>

</style>