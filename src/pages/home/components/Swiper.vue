<template>
  <div class="container">
    <swiper ref="mySwiper" :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" :alt="'轮播图广告' + item.id">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        }
      }
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container
    /deep/ .swiper-pagination-bullet-active
      background-color: #fff
  .container
    width: 100%
    height: 0
    padding-bottom: 25.6%
    overflow: hidden
    .swiper-img
      width: 100%
</style>
