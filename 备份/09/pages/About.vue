<template>
    <div>
        About
    </div>
</template>

<script lang="ts" setup name="About">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
let router = useRouter()
onMounted(()=>{
    setTimeout(()=>{
        router.push('/home')
    }, 3000)
})
</script>

<style scoped>
</style>