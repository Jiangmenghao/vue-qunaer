<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-functions></home-functions>
    <home-hot></home-hot>
    <home-like-list></home-like-list>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeFunctions from './components/Functions'
import HomeHot from './components/Hot'
import HomeLikeList from './components/Like'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeFunctions,
    HomeHot,
    HomeLikeList
  }
}
</script>

<style>

</style>
