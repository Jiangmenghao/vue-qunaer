<template>
  <div class="container">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="functions-area">
          <div class="function" v-for="item in page" :key="item.id">
            <img class="function-img" :src="item.imgUrl" :alt="item.desc">
            <div class="function-desc">{{ item.desc }}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
    <div class="pagination-wrapper">
      <div class="function-swiper-pagination" slot="pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFunctions',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.function-swiper-pagination'
        }
      }
    }
  },
  computed: {
    pages () {
      let pages = []
      this.list.forEach((item, index) => {
        let pageIndex = Math.floor(index / 8)
        if (!pages[pageIndex]) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .container
    /deep/
      .swiper-pagination-bullets
        display: flex
        align-items: center
        .swiper-pagination-bullet
          margin: 0 .08rem
          width: .12rem
          height: .12rem
          background-color: $bgColor
  .container
    height: 3.8rem
    .pagination-wrapper
      height: .6rem
      display: flex
      justify-content: center
      align-items center
    .functions-area
      display: flex
      flex-wrap: wrap
      height: 3.2rem
      .function
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        overflow: hidden
        width: 25%
        height:50%
        .function-img
          width: 1.1rem
        .function-desc
          font-size: .28rem
          color: $darkTextColor
          width: 100%
          text-align: center
          ellipsis()
</style>
