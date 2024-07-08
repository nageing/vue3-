<template>
    <div class="person">
        <h2>{{ sum }} 放大十倍{{ bigSum }}</h2>
        <button @click="add">加一</button><br>
        <img v-for="(i, index) in imageList" :src="i" :key="index"><br>
        <button @click="getImage">获取图片</button>
    </div>

</template>

<script lang="ts" setup name="Person">
    import useSum from '../hooks/useSum'
    import useImage from '../hooks/useImage';
    const {sum, add, bigSum} = useSum()
    const {imageList, getImage} = useImage()
</script>
    
<style scoped>
.person{
    background-color: rgb(139, 139, 205);
    margin: 0 auto;
    box-shadow: 0 0 10px;
    padding: 20px;
} 

ul{
    font-size: 22px;
}

img {
    width: 400px;
}

button {
    margin: 10px;
    padding: auto;
}
</style>