import Vue from 'vue'
import VueRouter from 'vue-router'

const home = ()=>import("../views/home/index");
const login = ()=>import("../views/login/index");
const show = ()=>import("../views/show/index");
const profile = ()=>import("../views/profile/index");
const cars = ()=>import("../views/cars/index");
const hospital = ()=>import("../views/hospital/index");
const hosdetail = ()=>import("../views/hosdetail/index");
const register = ()=>import("../views/register/index");
const detail = ()=>import("../views/detail/index");
const goods = ()=>import("../views/goods/index");

const car = ()=>import("../views/children/car/index");
const foot = ()=>import("../views/children/foot/index");
const malady = ()=>import("../views/children/malady/index");
const allergies = ()=>import("../views/children/allergies/index");
const count = ()=>import("../views/children/count/index");
const money = ()=>import("../views/children/money/index");
const pay = ()=>import("../views/children/pay/index");

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
     component:profile,
     children:[
       {
         path:"",
         redirect:"car"
       },{
         path:"car",
         component:car
       },{
         path:"foot",
         component:foot
       },{
         path:"malady",
         component:malady
       },{
         path:"allergies",
         component:allergies
       },{
         path:"count",
         component:count
       },{
         path:"money",
         component:money
       },{
         path:"pay",
         component:pay
       }
     ]
   },{
     path:"/cars",
     component:cars
   },{
     path:"/hospital",
     component:hospital
   },{
     path:"/register",
     component:register
   },{
     path:"/detail/:id",
     component:detail
   },{
     path:"/goods",
     component:goods
   },{
     path:"/hosdetail/:id",
     component:hosdetail
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router