<template>
  <div class="container">
    <div class="like-list-title">
      <img class="title-icon" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="心形图案">
      <span class="title-text">猜你喜欢</span>
    </div>
    <ul class="like-list-content">
      <li class="content-item border-bottom" v-for="item in list" :key="item.id">
        <a class="content-item-a" :href="item.link">
          <img class="content-item-img" :src="item.imgUrl" :alt="'猜你喜欢：' + item.title">
          <div class="content-item-info">
            <div class="info-title">{{ item.title }}</div>
            <div class="info-comments">
              <span class="stars">
                <span class="iconfont star-on" v-for="(i, index) in item.stars" :key="index">&#xe66b;</span><span class="iconfont star-on star-off" v-for="(i, index) in (5-item.stars)" :key="index+5">&#xe66b;</span>
              </span>
              <span class="info-comments-text">{{ item.comments + '条评论' }}</span>
            </div>
            <div class="info-price">
              <div class="info-price-text"><span class="price">¥<em class="price-number">{{ item.price }}</em></span>起</div>
              <div class="info-price-address">{{ item.address }}</div>
            </div>
          </div>
        </a>
      </li>
    </ul>
    <a class="like-list-more" href="https://touch.piao.qunar.com/touch/list_%E9%87%8D%E5%BA%86_%E6%99%AF%E7%82%B9%E9%97%A8%E7%A5%A8.html">查看所有产品</a>
  </div>
</template>

<script>
export default {
  name: 'HomeLikeList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .container
    padding-top: .2rem
    background-color: #eee
    .like-list-title
      padding: .24rem 0 .26rem 0
      background-color #fff
      .title-icon
        width: .3rem
        margin-left: .2rem
        vertical-align: top
      .title-text
        display: inline-block
        font-size: .32rem
        line-height: .44rem
        margin-left: .08rem
    .like-list-content
      background-color #fff
      .content-item-a
        display: flex
        padding: .2rem .24rem
        height: 2rem
        .content-item-img
          width: 2rem
        .content-item-info
          flex: 1
          padding-left: .22rem
          .info-title
            margin-top: .26rem
            font-size: .32rem
            line-height: .44rem
            color: $darkTextColor
          .info-comments
            height: .34rem
            margin-top: .14rem
            .stars
              display: inline-block
              min-width: 1.6rem
              font-size: .28rem
              color: $starOnColor
              .star-off
                color: $starOffColor
            .info-comments-text
              font-size: .24rem
              color: $grayTextColor
          .info-price
            margin-top: .22rem
            display: flex
            justify-content: space-between
            align-items: flex-end
            color: $grayTextColor
            font-size: .24rem
            .info-price-text
              .price
                color: $priceColor
                .price-number
                  font-size: .4rem
            .info-price-address
              max-width: 1.6rem
              ellipsis()
    .like-list-more
      display: block
      background-color: #fff
      padding: .2rem 0
      font-size: .28rem
      line-height: .4rem
      text-align: center
      color: #00afc7
</style>
