<template>
    <div class="person">
        <h1>情况三：监视【reactive】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }} 年龄：{{ person.age }}</h2>
        <button @click="changeName">改名字</button>
        <button @click="changeAge">改年龄</button>
        <button @click="changePerson">改对象</button>
    </div>

</template>

<script lang="ts" setup name="Person">
    import {reactive, watch} from 'vue'
    let person = reactive({
        name:"张三",
        age:18
    })

    function changeName() {
        person.name = 'zhang-san'
    }
    function changeAge() {
        person.age ++
    }

    function changePerson() {
        Object.assign(person, {name:'李四', age:19});
    }

    //默认开启深度监视
    watch(person, (newValue, oldValue)=>{
        console.log('change', newValue, oldValue)
    })
</script>
    
<style>
.person{
    background-color: rgb(186, 186, 200);
    margin: 0 auto;
    box-shadow: 0 0 10px;
    padding: 20px;
} 

button {
    margin: 10px;
    padding: auto;
}
</style>