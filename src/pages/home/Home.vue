<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-functions></home-functions>
    <home-hot></home-hot>
    <home-like-list></home-like-list>
    <home-weekend></home-weekend>
    <home-desc></home-desc>
    <home-footer></home-footer>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeFunctions from './components/Functions'
import HomeHot from './components/Hot'
import HomeLikeList from './components/Like'
import HomeWeekend from './components/Weekend'
import HomeDesc from './components/Desc'
import HomeFooter from './components/Footer'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeFunctions,
    HomeHot,
    HomeLikeList,
    HomeWeekend,
    HomeDesc,
    HomeFooter
  }
}
</script>

<style>

</style>
