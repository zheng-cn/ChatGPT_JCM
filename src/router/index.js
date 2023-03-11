import VueRouter from 'vue-router'
 
import ChatHome from '../view/pages/chatHome/index.vue'
import Lingting from '../view/pages/lingting.vue'
import Setting from '../view/pages/setting.vue'
 
export default new VueRouter({
    routes: [
        {
            path: "/",
            redirect: "/ChatHome",
          },
        {
            path: "/ChatHome",
            name: "ChatHome",
            component: ChatHome,
        },
        {
            path: "/Lingting",
            name: "Lingting",
            component: Lingting
        },   
        {
            path: "/Setting",
            name: "Setting",
            component: Setting
        },    
    ]
})