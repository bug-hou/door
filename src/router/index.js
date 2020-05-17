import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=>import("../views/home/index");
const login = ()=>import("../views/login/index");
const show = ()=>import("../views/show/index");
const profile = ()=>import("../views/profile/index");
const cars = ()=>import("../views/cars/index");

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

  const routes = [
   {
    path:"",
    redirect:"/home"
   },
   {
     path:"/home",
     component:home
   },{
      path:"/login",
      component:login
   },{
     path:"/show",
     component:show
   },{
     path:"/profile",
     component:profile
   },{
     path:"/cars",
     component:cars
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router