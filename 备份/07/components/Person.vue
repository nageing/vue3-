<template>
    <div class="person">
        <ul>
            <li v-for="i in list">{{ i.name }} -- {{ i.age }}</li>
        </ul>
    </div>

</template>

<script lang="ts" setup name="Person">
    import { defineProps, withDefaults } from 'vue';
    import {type persons} from '../types'
    //只接收list
    //defineProps(['list'])

    //接受list + 限制类型
    //defineProps<{list:persons}>()

    //接受list + 限制类型 + 限制必要性 + 指定默认值(withDefaults)
    withDefaults(defineProps<{list?:persons}>(),{
        list:() => [{id:'mmmmyymme00', name:'undefine', age:-1}]
    })

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

button {
    margin: 10px;
    padding: auto;
}
</style>