<template>
    <div class="person">
        <h1>情况四：监视【reactive或ref】定义的【对象类型】数据的某个属性</h1>
        <h2>姓名：{{ person.name }} 年龄：{{ person.age }}</h2>
        <h2>c1：{{ person.car.c1 }} c2：{{ person.car.c2 }}</h2>
        <button @click="changeName">改名字</button>
        <button @click="changeAge">改年龄</button>
        <button @click="changePerson">改对象</button>
        <button @click="changeC1">c1</button>
        <button @click="changeC2">c2</button>
        <button @click="changeCar">car</button>
    </div>

</template>

<script lang="ts" setup name="Person">
    import {ref, reactive, watch, watchEffect, defineExpose} from 'vue'
    let person = reactive({
        name:"张三",
        age:18,
        car:{
            c1:'aa',
            c2:'bb'
        }
    })
    let a = ref(0)
    let b = ref(1)
    let c = ref(2)
    function changeName() {
        person.name = 'zhang-san'
    }
    function changeAge() {
        person.age ++
    }

    function changePerson() {
        Object.assign(person, {name:'李四', age:19});
    }

    function changeC1() {
        person.car.c1 = 'cc'
    }
    function changeC2() {
        person.car.c2 = 'dd'
    }

    function changeCar() {
        person.car = {c1:'ee', c2:'ff'}
    }

    //只监视部分属性
    watch(()=>person.name, (value)=>{
        console.log('name变了', value)
    });

    //基本属性不需要加deep，但是对象要加，如果不加那就只能监视整体，加了就可以监视部分，如果不返回函数的话，就只能监视部分不能监视整体
    watch([()=>person.car, ()=>person.age], (v)=>{
        let [newCar, newAge] = v;
        // console.log('car变了', newCar)
        if (newAge > 21) {
            console.log('watch输出')
        }
    }, {deep: true})

    //watchEffect可以自动选择，watch必须要写进去才可以
    watchEffect(()=>{
        if (person.age > 21) {
            console.log('watchEffect输出')
        }
    })

    defineExpose({a, b, c})
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