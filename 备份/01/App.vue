<template>
<!-- html -->
    <div class="app">
        <h1>hello</h1>
        <Person></Person>
    </div>
</template>

<script>
    import Person from './components/Person.vue';
    export default {
        name:'App',
        components:{Person}
    }
</script> 
    
<style>
/* CSS */
.app {
    background-color: blue;
    margin: 0 auto;
    box-shadow: 0 0 10px;
    padding: 20px;
}
</style>