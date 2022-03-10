<template>
    <div>
        <Display :list="list"></Display>
    </div>
</template>

<script>

import Display from '../../components/shared/Display/Display.vue'

export default{

    props:['list'],

    components: {
        Display: Display
    }, 

   
   
}

</script>

<style scoped>

</style>