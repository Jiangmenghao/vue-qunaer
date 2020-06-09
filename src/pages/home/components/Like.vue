<template>
  <div class="container">
    <div class="like-list-title">
      <img class="title-icon" src="https://imgs.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="心形图案">
      <span class="title-text">猜你喜欢</span>
    </div>
    <ul class="like-list-content">
      <li class="content-item border-bottom" v-for="item in likeList" :key="item.id">
        <a class="content-item-a" :href="item.link">
          <img class="content-item-img" :src="item.imgUrl" :alt="'猜你喜欢：' + item.title">
          <div class="content-item-info">
            <div class="info-title">{{ item.title }}</div>
            <div class="info-comments">
              <span class="stars">
                <span class="iconfont star-on" v-for="(i, index) in item.stars" :key="index">&#xe66b;</span><span class="iconfont star-on star-off" v-for="(i, index) in (5-item.stars)" :key="index">&#xe66b;</span>
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
  data () {
    return {
      likeList: [{
        id: '001',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=103771864&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201401/29/8e60d7bb448bc8d4652efb382324076f.jpg_200x200_45d36d9b.jpg',
        title: '重庆柏联温泉',
        stars: 5,
        comments: 568,
        price: 278,
        address: '北碚区'
      },
      {
        id: '002',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=2290943265&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201308/06/9b60c7ebf073ec9fc8d65eac.jpg_200x200_307a8def.jpg',
        title: '万盛石林',
        stars: 5,
        comments: 1160,
        price: 288,
        address: '万盛区'
      },
      {
        id: '003',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=208797315&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/201402/20/d5c7da32877d8b90dc6297e491a4590e.jpg_200x200_49be5ab2.jpg',
        title: '重庆市人民大礼堂',
        stars: 4,
        comments: 468,
        price: 800,
        address: '渝中区'
      },
      {
        id: '004',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=459445093&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1709/d9/d9f5717a149adeffa3.img.jpg_200x200_adf02d8e.jpg',
        title: '铜梁奇彩梦园',
        stars: 5,
        comments: 1538,
        price: 560,
        address: '铜梁县'
      },
      {
        id: '005',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=3553437678&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1911/84/8493e4b6e0787877a3.img.jpg_200x200_12575542.jpg',
        title: '两江夜游·金碧系列游船',
        stars: 5,
        comments: 1397,
        price: 128,
        address: '两江新区'
      },
      {
        id: '006',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=1105544&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1712/6b/6b76d111854eb88ba3.img.jpg_200x200_ccfe9d56.jpg',
        title: '重庆汉海海洋公园',
        stars: 5,
        comments: 5432,
        price: 138,
        address: '巴南区'
      },
      {
        id: '007',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=4261131435&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1804/a6/a653f0893b7b5669a3.img.jpg_200x200_8d087d21.jpg',
        title: '贝迪颐园温泉旅游度假区',
        stars: 4,
        comments: 1744,
        price: 108,
        address: '九龙坡区'
      },
      {
        id: '008',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=2918156078&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1910/8c/8c999f7735abe51fa3.img.jpg_200x200_dc542574.jpg',
        title: '武陵山大裂谷',
        stars: 5,
        comments: 1354,
        price: 135,
        address: '涪陵区'
      },
      {
        id: '009',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=23247096&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1705/c9/c9a576bbfef3a139a3.water.jpg_200x200_a0b9fbb4.jpg',
        title: '际华园',
        stars: 3,
        comments: 352,
        price: 150,
        address: '渝北区'
      },
      {
        id: '010',
        link: 'http://touch.piao.qunar.com/touch/detail.htm?id=2601105247&from=as_recommend_sight',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/2001/5a/5ae854e3784878f0a3.img.jpg_200x200_1c78a891.jpg',
        title: '乐和乐都主题公园',
        stars: 5,
        comments: 5194,
        price: 184,
        address: '永川区'
      }],
      computed: {
        stars () {
          return this.likeList
        }
      }
    }
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
      padding: .2rem 0
      font-size: .28rem
      line-height: .4rem
      text-align: center
      color: #00afc7
</style>
