<template>
  <div class="bg-color">
      <div class="container">
        <div class="hot-title">
          <div>
            <img class="hot-title-icon" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
            <span class="hot-title-text">本周热门榜单</span>
          </div>
          <a class="hot-title-all-link" href="http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=%E9%87%8D%E5%BA%86">全部榜单<span class="iconfont arrow-right">&#xe636;</span></a>
        </div>
        <ul class="hot-list">
          <router-link tag="li" class="list-item" v-for="item in list" :key="item.id" :to="'/detail/' + item.id">
            <a class="list-item-fulllink" :href="item.linkTo">
              <div class="top-tag" v-if="!(item.tagImg==='')">
                <img class="top-tag-img" :src="item.tagImg" :alt="'TopTag'+item.id">
              </div>
              <div class="imgcon">
                <img class="imgcon-img" :src="item.imgUrl" :alt="item.desc+'的图片'">
              </div>
              <div class="desc">{{ item.desc }}</div>
              <div class="price">
                <span class="price-number">¥{{ item.price }}</span>起</div>
            </a>
          </router-link>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .bg-color
    padding-top: .2rem
    background-color #eee
    .container
      height: 4rem
      background-color #fff
      .hot-title
        display: flex
        justify-content: space-between
        align-items: center
        height: .92rem
        .hot-title-icon
          width: .3rem
          height: .3rem
          margin-left: .2rem
        .hot-title-text
          font-size: .32rem
          color: $darkTextColor
          margin-left: .08rem
        .hot-title-all-link
          font-size: .24rem
          color: $grayTextColor
          margin-right: .32rem
          .arrow-right
            font-size: .24rem
      .hot-list
        height: 3.08rem
        white-space: nowrap
        overflow-x: scroll
        overflow-y: hidden
        padding: 0 .24rem
        .list-item
          display: inline-block
          width: 2rem
          margin-right: .12rem
          .list-item-fulllink
            position relative
            display: block
            height: 3.08rem
            padding: .06rem 0 .2rem
            box-sizing: border-box
            .top-tag
              position: absolute
              top: 0
              left: 0
              z-index: 1
              .top-tag-img
                width: .84rem
                height: .4rem
            .imgcon
              .imgcon-img
                width: 100%
            .desc
              margin-top: .12rem
              font-size: .24rem
              text-align: center
              line-height: .32rem
              color: $darkTextColor
              ellipsis()
            .price
              text-align: center
              font-size: .24rem
              line-height: .36rem
              color: $grayTextColor
              .price-number
                font-size: .28rem
                color: $priceColor
</style>
