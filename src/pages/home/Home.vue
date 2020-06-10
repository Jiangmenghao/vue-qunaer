<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-functions></home-functions>
    <home-hot></home-hot>
    <home-like-list></home-like-list>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeFunctions from './components/Functions'
import HomeHot from './components/Hot'
import HomeLikeList from './components/Like'
import HomeWeekend from './components/Weekend'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeFunctions,
    HomeHot,
    HomeLikeList,
    HomeWeekend
  }
}
</script>

<style>

</style>
