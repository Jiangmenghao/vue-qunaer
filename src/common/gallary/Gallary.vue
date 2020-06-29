<template>
  <div class="container" @click="closeGallary">
    <swiper ref="mySwiper" class="wrapper" :options="swiperOptions">
      <swiper-slide v-for="(img, index) in imgs" :key="index">
        <img class="gallary-img" :src="img">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>>

<script>
export default {
  name: 'CommonGallary',
  props: {
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    closeGallary () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container
    /deep/ .swiper-container
      overflow: inherit
  .container
    position: fixed
    top: 0
    right: 0
    bottom: 0
    left: 0
    display: flex
    flex-direction: column
    justify-content: center
    background-color: #000
    z-index: 1
    .wrapper
      width: 100%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>
