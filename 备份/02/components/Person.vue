<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel">查看联系方式</button><br>

        姓：<input type="text" v-model="firstName"><br>
        名：<input type="text" v-model="secondName"><br>
        全名：<span>{{ fullName }}</span> <br>
        <button @click="setName">set</button>

    </div>
    <div class="person">
        <h2>汽车信息：{{ car.brand }}汽车价值{{ car.price }}</h2>
        <button @click="changeCarPrice">增加价格</button>
        <h2>游戏信息：</h2>
        <ul>
            <li v-for="g in game" :key="g.id">{{ g.name }}</li>
        </ul>
        <button @click="changeGame">更改</button>
    </div>
</template>

<script lang="ts" setup name="Person">
    import {ref, reactive, computed} from 'vue'
    let name = ref("张三")
    let age = ref(18);
    let tel = '189123345332';
    let car = ref({brand:'小米', price: 30})
    let game = ref([
        {id:'01', name:'genshen'},
        {id:'02', name:'sanguosha'},
        {id:'03', name:'mingchao'},
        {id:'04', name:'huoying'},
    ])

    let firstName = ref('张')
    let secondName = ref('三')

    // let fullName = computed(()=>{
    //     return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + 
    //     secondName.value.slice(0, 1).toUpperCase() + secondName.value.slice(1)
    // })
    let fullName = computed({
        get () {
            return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + 
                    secondName.value.slice(0, 1).toUpperCase() + secondName.value.slice(1)
        },
        set(v) {
            const a = v.split('-')
            firstName.value = a[0]
            secondName.value = a[1]
        }
        
    })

    function setName() {
        fullName.value = 'li-si'
    }

function changeName() {
    name.value = 'zhang-san';
}
function changeAge() {
    age.value ++;
}

function showTel() {
    alert(tel);
}

function changeCarPrice() {
    car.value.price ++;
}
function changeGame() {
    game.value[0].name = 'zzzzzz';
}
</script>
    
<style>
.person{
    background-color: rgb(186, 186, 200);
    margin: 0 auto;
    box-shadow: 0 0 10px;
    padding: 20px;
}
</style>