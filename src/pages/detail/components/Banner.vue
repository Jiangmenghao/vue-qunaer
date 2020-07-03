<template>
  <div>
    <div class="banner" @click="showGallary">
      <img class="banner-img" :src="bannerImg" alt="详情页图片">
      <div class="banner-info">
        <div class="info-text">{{ title }}</div>
        <div class="info-number">
          <span class="iconfont info-icon">&#xe668;</span>
          {{ numberOfImgs }}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs="gallaryImgs" v-show="isGallaryShow" @close="closeGallary"></common-gallary>
    </fade-animation>
  </div>
</template>>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/animation/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    title: String,
    bannerImg: String,
    gallaryImgs: Array
  },
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      isGallaryShow: false
    }
  },
  computed: {
    numberOfImgs () {
      return this.gallaryImgs.length
    }
  },
  methods: {
    showGallary () {
      this.isGallaryShow = true
    },
    closeGallary () {
      this.isGallaryShow = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: 0
      right: 0
      bottom: 0
      display: flex
      line-height: .4rem
      padding: .36rem .2rem
      color: #fff
      background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,.8))
      .info-text
        flex: 1
        font-size: .36rem
      .info-number
        background: rgba(0,0,0,.5)
        border-radius: .2rem
        padding: 0 .3rem
        .info-icon
          font-size: .24rem
</style>
