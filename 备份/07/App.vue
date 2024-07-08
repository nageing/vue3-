    
    <template>
        <!-- a 只是字符串，b是表达式 -->
        <Person a="1 + 1" :b="1 + 1" :list="personList"/>
    </template>
    
    <script lang="ts" setup name="App">
        import Person from './components/Person.vue';
        import {reactive} from 'vue'
        import {type persons} from './types'
        let personList = reactive<persons>([
            {id:'mmyymme01', name:'zzzsan', age:18},
            {id:'mmyymme02', name:'llllsi', age:18},
            {id:'mmyymme03', name:'wwwwaw', age:18},
            {id:'mmyymme04', name:'zzzzzl', age:18}
        ])
    </script> 
