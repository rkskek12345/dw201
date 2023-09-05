import { createWebHistory, createRouter} from 'vue-router';

const routes = [
    {
        path:"/",
        name:"MyHome",
        component : () => import('@/components/MyHome.vue')
    },
    {
        path:"/login",
        name:"SdmLogin",
        component :() => import('@/components/SdmLogin.vue')
    },
    {
        path:"/sign",
        name:"SingUp",
        component :() => import('@/components/SingUp.vue')
    },
    {
        path:"/qs",
        name:"QuestionWeb",
        component :() => import('@/components/QuestionWeb.vue')
    },
    {
        path:"/dress",
        name:"DressRoom",
        component :() => import('@/components/DressRoom.vue')
    },
    {
        path:"/makeup",
        name:"MakeUp",
        component :() => import('@/components/MakeUp.vue')
    }
];

const router = createRouter({
    history : createWebHistory(), routes,
});
export default router;
