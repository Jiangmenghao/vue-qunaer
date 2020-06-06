<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-functions></home-functions>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeFunctions from './components/Functions'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeFunctions
  }
}
</script>

<style>

</style>
