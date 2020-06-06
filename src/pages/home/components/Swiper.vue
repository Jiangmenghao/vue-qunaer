<template>
  <div class="container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" :alt="'轮播图广告' + item.id">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true,
        autoplay: {delay: 3000}
      },
      swiperList: [
        { id: '0001', imgUrl: 'https://source.qunarzz.com/site/images/wns/20200519_qunar_dujia_banner_750x192_2.jpg' },
        { id: '0002', imgUrl: 'https://source.qunarzz.com/site/images/wns/20200601_qunar_dujia_750x192_3.jpg' },
        { id: '0003', imgUrl: 'https://source.qunarzz.com/site/images/wns/20200604_qunar_dujia_banner750x192_4.jpg' },
        { id: '0004', imgUrl: 'https://source.qunarzz.com/site/images/wns/20200602_qunar_dujia_homepage_750x192_6.jpg' }
      ]
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
