<template>
  <div class="container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="item in swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" :alt="'轮播图' + item.id">
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
        loop: true
      },
      swiperList: [
        { id: '0001', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/e893a3037ff23b6323be104722deb1c4.jpg?thumb=1&w=720&h=360' },
        { id: '0003', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/1b234526fb88c62fb3c643cfa79bb560.jpg?thumb=1&w=720&h=360' },
        { id: '0002', imgUrl: 'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8e5387cbaae9677837756b9590bd0e34.jpg?thumb=1&w=720&h=360' }
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
    padding-bottom: 50%
    .swiper-img
      width: 100%
</style>
