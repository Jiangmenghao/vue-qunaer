<template>
  <div>
    <detail-banner :title="title" :bannerImg="bannerImg" :gallaryImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <detail-baseinfo :score="score" :desc="desc" :numC="numberOfComments" :numS="numberOfStrategy" :add="address"></detail-baseinfo>
    <div class="content">
      <detail-promote></detail-promote>
      <detail-ticket></detail-ticket>
    </div>
  </div>
</template>

<script>
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailBaseinfo from './components/Baseinfo'
import DetailTicket from './components/Ticket'
import DetailPromote from './components/Promote'
import axios from 'axios'
export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader,
    DetailBaseinfo,
    DetailTicket,
    DetailPromote
  },
  data () {
    return {
      title: '',
      bannerImg: '',
      gallaryImgs: [],
      score: '',
      desc: '',
      numberOfComments: 0,
      numberOfStrategy: 0,
      address: ''
    }
  },
  methods: {
    getDetailData () {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(response => this.gotDetailData(response.data))
    },
    gotDetailData (resData) {
      if (resData.ret && resData.data) {
        let data = resData.data[0]
        this.title = data.title
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.score = data.score
        this.desc = data.desc
        this.numberOfComments = data.numberOfComments
        this.numberOfStrategy = data.numberOfStrategy
        this.address = data.address
      }
    }
  },
  mounted () {
    this.getDetailData()
  }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 30rem
</style>
