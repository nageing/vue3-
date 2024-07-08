<template>
        <div class="person">
            <h2>姓名：{{ name }}</h2>
            <h2>年龄：{{ age }}</h2>
            <button @click="changeName">修改姓名</button>
            <button @click="changeAge">修改年龄</button>
            <button @click="showTel">查看联系方式</button>
        </div>
    </template>
    
    <script>
        export default {
            name:'Person',
            data() {
                return {
                    name:'张三',
                    age:'18',
                    tel:'189123345332'
                }
            },
            methods: { 
                changeName() {
                    this.name = 'zhang-san'
                },

                changeAge() {
                    this.age ++;
                },
                showTel() {
                    alert(this.tel)
                }
            },
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