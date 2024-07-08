//创建路由器
import { createRouter, RouteRecordRaw, createMemoryHistory} from "vue-router";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import News from "../pages/News.vue";
import Detail from "../pages/Detail.vue";

const routes: Array<RouteRecordRaw> = [

    {
        path:'/home',
        component:Home
    },
    {
        path:'/news',
        component:News,
        children:[
            {
                path:'detail',
                component:Detail,
                //query写法
                props(route){
                    return route.query;
                }
            }
        ]
    },
    {
        path:'/about',
        component:About
    },
    {
        path:'/',
        redirect:'/home'
    }
]

const router = createRouter({
    history:createMemoryHistory(),
    routes
})
export default router 