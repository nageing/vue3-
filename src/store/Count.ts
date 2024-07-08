import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";

// export const useCountStore = defineStore('count', {
//     //动作
//     //放的是动作方法
//     actions:{
//         add(v:number) {
//             this.sum += v
//         },
//         sub(v:number) {
//             this.sum -= v
//         } 
//     },
//     //状态
//     state() {
//         return {
//             sum: JSON.parse(localStorage.getItem('sum') as string) || 0,
//             a: 4,
//             b: 10
//         }
//     },
//     //计算
//     getters:{
//         bigSum: state => state.sum * 10,
//         updA() :number{
//             return this.a * 20
//         }
//     }
// })


//组合式写法
export const useCountStore = defineStore('count', ()=>{
    let sum = ref(Number(JSON.parse(localStorage.getItem('sum') as string)) || 0)
    let a = ref(4)
    let b = ref(10)
    function add(v: number) {
        sum.value += v;
    }
    function sub(v: number) {
        sum.value -= v
    }
    const bigSum = computed(()=>{
        return sum.value * 10
    })
    const updA = computed(()=>{
        return a.value * 22
    })
    return {sum, a, b, bigSum, updA, add, sub}
})
