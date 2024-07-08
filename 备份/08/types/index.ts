//接口
export interface PersonInter {
    id: string,
    name: string,
    age: number
}

//自定义类型
export type persons = Array<PersonInter>
//export type persons =  PersonInter[]