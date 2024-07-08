<template>
    <div class="app">
        <Header></Header>
        <!-- 导航区 -->
        <nav class="navigate">
            <ul class="nav-links">
                <li><RouterLink :to="{path:'/home'}" class="nav-link">首页</RouterLink></li>
                <li><RouterLink :to="{path:'/news'}" class="nav-link">新闻</RouterLink></li>
                <li><RouterLink :to="{path:'/about'}" class="nav-link">关于</RouterLink></li>
            </ul>
        </nav>
        <!-- 展示区 -->
        <div class="main-content">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script lang="ts" setup name="App">
import { RouterView, RouterLink } from 'vue-router';
import Header from './components/Header.vue';

</script>

<style scoped>
.app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 50px auto;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    background-color: #fff;
    text-align: center;
}

.navigate {
    background-color: #007bff;
    border-radius: 10px 10px 0 0;
    padding: 10px 0;
    margin-bottom: 20px;
}

.nav-links {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
}

.nav-link {
    color: white;
    font-weight: bold;
    font-size: 23px;
    text-decoration: none;
    padding: 10px 20px;
    margin: 0 200px;
    display: block;
    transition: background-color 0.3s;
}

.nav-link:hover {
    background-color: #0056b3;
    border-radius: 5px;
}

.main-content {
    padding: 20px;
    background-color: #f8f9fa;
    border: 1px solid #ddd;
    border-radius: 5px;
}

.main-content p {
    margin: 0;
    line-height: 1.6;
    color: #333;
}
</style>