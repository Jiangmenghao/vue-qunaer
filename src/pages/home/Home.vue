<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-functions></home-functions>
    <home-hot></home-hot>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeFunctions from './components/Functions'
import HomeHot from './components/Hot'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeFunctions,
    HomeHot
  }
}
</script>

<style>

</style>
