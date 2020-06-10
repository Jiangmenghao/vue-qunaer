<template>
  <div class="bg-color">
      <div class="container">
        <div class="hot-title">
          <div>
            <img class="hot-title-icon" src="https://imgs.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
            <span class="hot-title-text">本周热门榜单</span>
          </div>
          <a class="hot-title-all-link" :href="allListLink">全部榜单<span class="iconfont arrow-right">&#xe636;</span></a>
        </div>
        <ul class="hot-list">
          <li class="list-item" v-for="item in topList" :key="item.id">
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
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHot',
  data () {
    return {
      allListLink: 'http://touch.piao.qunar.com/touch/weekHotSales.htm?cityName=%E9%87%8D%E5%BA%86',
      topList: [{
        id: '001',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=193527&from=as_recommend_sight',
        tagImg: 'https://imgs.qunarzz.com/piao/fusion/1710/ab/159673b63e6ca702.png',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1505/be/be4802e10f3b3107.water.jpg_250x250_45ab93e6.jpg',
        desc: '武隆天坑地缝国家地质公园',
        price: 56
      },
      {
        id: '002',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=9073&from=as_recommend_sight',
        tagImg: 'https://imgs.qunarzz.com/piao/fusion/1710/2d/36d0c4adaebbbc02.png',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/f9/f9421c274027d734.img.jpg_250x250_aa46ab1d.jpg',
        desc: '武隆仙女山国家森林公园',
        price: 48
      },
      {
        id: '003',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=14770&from=as_recommend_sight',
        tagImg: 'https://imgs.qunarzz.com/piao/fusion/1710/67/edc47ffef9e96b02.png',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1507/8d/8d1817185ad3f395.img.jpg_250x250_2a9d3bd3.jpg',
        desc: '武隆天生三桥风景区',
        price: 92
      },
      {
        id: '004',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=465379&from=as_recommend_sight',
        tagImg: '',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1709/e4/e4b97c2fbb4e696a3.img.png_250x250_0aa87bab.png',
        desc: '重庆欢乐谷',
        price: 175.5
      },
      {
        id: '005',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=462933&from=as_recommend_sight',
        tagImg: '',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1712/6b/6b76d111854eb88ba3.img.jpg_250x250_288328ec.jpg',
        desc: '重庆汉海海洋公园',
        price: 133
      },
      {
        id: '006',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=4941&from=as_recommend_sight',
        tagImg: '',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201305/08/8638c7dbd656cafac8d65eac.jpg_250x250_345a75e7.jpg',
        desc: '黑山谷',
        price: 70
      },
      {
        id: '007',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=455388&from=as_recommend_sight',
        tagImg: '',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1803/b9/b9bc15fc941a2e8ba3.img.jpg_250x250_567f9b77.jpg',
        desc: '梦幻奥陶纪',
        price: 210
      },
      {
        id: '008',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=41794&from=as_recommend_sight',
        tagImg: '',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1805/ad/ad507355a167f587a3.img.jpg_250x250_608b4e13.jpg',
        desc: '重庆长江索道',
        price: 26
      },
      {
        id: '009',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=191376&from=as_recommend_sight',
        tagImg: '',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201306/04/e6a374c53b689923c8d65eac.jpg_250x250_ddc8c164.jpg',
        desc: '两江夜游·朝天系列游船',
        price: 128
      },
      {
        id: '010',
        linkTo: 'http://touch.piao.qunar.com/touch/detail.htm?id=463598&from=as_recommend_sight',
        tagImg: '',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1803/63/630540ceb7fb0950a3.water.jpg_250x250_692fb7fa.jpg',
        desc: 'WFC会仙楼观景台',
        price: 65
      }]
    }
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
