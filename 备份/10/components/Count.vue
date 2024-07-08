<template>
    <div class="count">
        <h2>当前求和为{{ sum }} a：{{ a }} b：{{ b }}</h2>
        <h2>bigSum：{{ bigSum }}  updA：{{ updA }}</h2>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
        </select>
        <button @click="sub">减</button>
        <button @click="add">加</button>
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue';
import { useCountStore } from '../store/Count';
import { storeToRefs } from 'pinia';

    const CountStore = useCountStore()
    const {sum, a, b, bigSum, updA} = storeToRefs(CountStore);
    const n = ref(1)
    function add() {
        // //第一种
        // CountStore.sum += n.value
        // CountStore.a ++
        // CountStore.b ++
        // //第二种
        // CountStore.$patch({
        //     sum: 111,
        //     a: 33,
        //     b: 44
        // })
        //第三种
        CountStore.add(n.value)
    }
    function sub() {
        CountStore.sub(n.value)
    }

    CountStore.$subscribe((mutate, state)=>{//本次修改的信息和数据
        console.log("数据发生变化", mutate, state)
        localStorage.setItem('sum', JSON.stringify(state.sum))
    })

</script>

<style scoped>
    .count{
        background-color: rgb(186, 186, 200);
        margin: 0 auto;
        box-shadow: 0 0 10px;
        padding: 20px;
    }
    button {
        border-radius: 5px;
        font-size: 18px;
        margin: 10px 10px;
    }
    select {
        padding: 5px; /* 内边距 */  
        font-size: 16px; /* 字体大小 */  
        color: #333; /* 字体颜色 */  
        background-color: #f8f9fa; /* 背景颜色 */  
        border: 1px solid #ced4da; /* 边框颜色 */  
        border-radius: 5px; /* 圆角边框 */  
        cursor: pointer; /* 鼠标指针 */  
        outline: none; /* 移除焦点轮廓 */  
        transition: background-color 0.3s ease; /* 平滑的背景色过渡效果（可选） */ 
    }
    select:hover {
        background-color: #e9ecef;
    }
</style>
