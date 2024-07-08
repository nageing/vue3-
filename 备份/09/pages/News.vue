<template>
    <div class="news-list-container">
        <ul class="news-list">
            <li v-for="item in newsList" :key="item.id">
                <button @click="showNews(item)">查看新闻</button>
                <router-link 
                :to="{
                    path: '/news/detail',
                    query:{
                        id:item.id,
                        title:item.title,
                        content:item.content
                    }
                }"
                >
                    {{ item.title }}
                </router-link>
            </li>
        </ul>
        <div class="news-detail-container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script lang="ts" setup name="News">
import { title } from 'process';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const newsList = reactive([
    { id: 'asdfgt01', title: 'news1', content: 'content1111' },
    { id: 'asdfgt02', title: 'news2', content: 'content2222' },
    { id: 'asdfgt03', title: 'news3', content: 'content3333' },
    { id: 'asdfgt04', title: 'news4', content: 'content4444' },
    { id: 'asdfgt05', title: 'news5', content: 'content5555' }
])
const router = useRouter()
interface NewsInter{
    id: string,
    title:string,
    content:string
}

function showNews(item:NewsInter) {
    router.push({
        path: '/news/detail',
        query:{
            id:item.id,
            title:item.title,
            content:item.content
        }
    })
}

</script>

<style scoped>
.news-list-container {
    display: flex;
    flex-direction: column;
    /* 垂直布局，如果需要水平布局可以改为 row */
}

.news-list {
    list-style-type: none;
    padding: 0;
    margin: 0;
}

.news-list li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
}

.news-detail-container {
    margin-top: 20px;
    /* 与新闻列表之间的间隔 */
    padding: 20px;
    border: 1px solid #eee;
    /* 可选，为了更清晰的视觉分隔 */
    flex: 1;
    /* 使容器尽可能大，但不挤压上面的新闻列表 */
}
</style>