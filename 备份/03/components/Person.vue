<template>
    <div class="person">
        <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
        <h2>当前求和为{{ sum }}</h2>
        <button @click="changeSum">sum + 1</button>
        <h1>情况二：监视【ref】定义的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }} 年龄：{{ person.age }}</h2>
        <button @click="changeName">改名字</button>
        <button @click="changeAge">改年龄</button>
        <button @click="changePerson">改对象</button>
    </div>

</template>

<script lang="ts" setup name="Person">
    import {ref, watch} from 'vue'
    let sum = ref(0);
    function changeSum() {
        sum.value ++;
    }
    const stopWatch = watch(sum, (newValue, oldValue)=>{
        console.log(oldValue + '变成' + newValue);
        if (newValue >= 10) {
            stopWatch();
        }
    })


    let person = ref({
        name:"张三",
        age:18
    })

    function changeName() {
        person.value.name = 'zhang-san'
    }
    function changeAge() {
        person.value.age ++
    }

    function changePerson() {
        person.value = {name:'李四', age:19}
    }

    //监视对象地址值，想要监视对象内部属性变化，需要手动开启深度监视{deep: true}，地址如果没换，那新旧值一样都是新值。、
    //immediate在最开始的时候就调用函数，不管有没有触发
    watch(person, (newValue, oldValue)=>{
        console.log('change', newValue, oldValue)
    }, {deep: true, immediate: true})

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