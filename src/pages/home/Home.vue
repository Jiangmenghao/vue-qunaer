<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-functions :list="functionList"></home-functions>
    <home-hot :list="topList"></home-hot>
    <home-like-list :list="likeList"></home-like-list>
    <home-weekend :list="weekendList"></home-weekend>
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
import axios from 'axios'
import { mapState } from 'vuex'
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
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      functionList: [],
      topList: [],
      likeList: [],
      weekendList: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getHomeData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(response => this.gotHomeData(response.data))
        .catch(e => {
          console.Error(e)
        })
    },
    gotHomeData (resData) {
      if (resData.ret && resData.data) {
        this.swiperList = resData.data.swiperList
        this.functionList = resData.data.functionList
        this.topList = resData.data.topList
        this.likeList = resData.data.likeList
        this.weekendList = resData.data.weekendList
      }
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeData()
  },
  activated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeData()
    }
  }
}
</script>

<style>

</style>
