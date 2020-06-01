<!--  -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="@/assets/image/show2.png" alt=""></div>
            <div class="swiper-slide"><img src="@/assets/image/show1.png" alt=""></div>
            <div class="swiper-slide"><img src="@/assets/image/show3.png" alt=""></div>
            <div class="swiper-slide"><img src="@/assets/image/show4.png" alt=""></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev nav"></div>
        <div class="swiper-button-next nav"></div>
    </div>
</template>

<script>
import Swiper from 'swiper';
import 'swiper/css/swiper.min.css';
export default {
    mounted(){
          var mySwiper = new Swiper ('.swiper-container', {
    loop: true, // 循环模式选项
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })  
    }
}
</script>
<style scoped>
.nav{
  font-size: 20px;
}
img{
    width: 800px;
    height: 505px;
}
</style>