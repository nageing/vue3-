<template>
    <!-- html -->
        <div class="app">
            <h1>hello</h1>
            <button @click="showRen">button</button>
            <Person ref="ren"/>
        </div>
    </template>
    
    <script lang="ts" setup name="app">
        import Person from './components/Person.vue';
        import {ref} from 'vue'
        let ren = ref()
        function showRen() {
            console.log(ren.value)
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