<template>
  <div>
    <div class="banner" @click="showGallary">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_600x330_6bbc3349.jpg" alt="详情页图片">
      <div class="banner-info">
        <div class="info-text">重庆柏联温泉</div>
        <div class="info-number">
          <span class="iconfont info-icon">&#xe668;</span>
          8
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallary :imgs=imgs v-show="isGallaryShow" @close="closeGallary"></common-gallary>
    </fade-animation>
  </div>
</template>>

<script>
import CommonGallary from 'common/gallary/Gallary'
import FadeAnimation from 'common/animation/FadeAnimation'
export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation
  },
  data () {
    return {
      isGallaryShow: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_r_800x800_7d4960ed.jpg',
        'http://img1.qunarzz.com/sight/p0/201401/29/f4e8fc8ecb69625c6c5ecc7a96c285e4.jpg_r_800x800_d8d4bf00.jpg',
        'http://img1.qunarzz.com/sight/p0/1411/59/51e6bc8b9b8a24b05be103f0b097676d.water.jpg_r_800x800_c235f26b.jpg',
        'http://img1.qunarzz.com/sight/p0/1411/6b/3c0f516dd29020e7a27e876f62206b6a.water.jpg_r_800x800_c0c39256.jpg',
        'http://img1.qunarzz.com/sight/p0/1408/29/2f35cebcac3b75c0d5131c6d293f7679.jpg_r_800x800_9611ed06.jpg',
        'http://img1.qunarzz.com/sight/p0/201401/29/d8e051a97e6727724499143010b1ac39.jpg_r_800x800_a35cb6ff.jpg',
        'http://img1.qunarzz.com/sight/p0/201401/29/560939ab2be4397b4083b7af75d1f838.jpg_r_800x800_3cf6f71f.jpg',
        'http://img1.qunarzz.com/sight/p0/1501/3c/3c36b64e0f83627c.water.jpg_r_800x800_a0e26eef.jpg']
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
