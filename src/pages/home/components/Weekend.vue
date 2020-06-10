<template>
  <div class="container">
    <h2 class="weekend-title">周末去哪儿</h2>
    <ul class="weekend-list">
      <li class="weekend-list-item" v-for="item in weekendList" :key="item.id">
        <a class="list-item-fulllink" :href="item.link">
          <div class="product-imgcontainer">
            <img :src="item.imgUrl" :alt="item.title">
          </div>
          <div class="product-info">
            <p class="info-name">{{ item.title }}</p>
            <p class="info-desc">{{ item.desc }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data () {
    return {
      weekendList: [{
        id: '001',
        link: 'https://touch.piao.qunar.com/touch/toSku.htm?skuId=768&skuName=%E9%87%8D%E5%BA%86%E5%A4%9C%E6%99%AF%E5%A4%A7%E8%B5%8F&cat=from_area%3Dts_sku%26from_index%3D0%26from_value%3D%25E9%2587%258D%25E5%25BA%2586%25E5%25A4%259C%25E6%2599%25AF%25E5%25A4%25A7%25E8%25B5%258F%26dist_city%3D%25E9%2587%258D%25E5%25BA%2586',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1812/4c/33ad31d025fef.jpg_r_640x214_7821b813.jpg',
        title: '重庆夜景大赏',
        desc: '享巴渝特色，赏两江风光，感受不一样的重庆夜景！'
      },
      {
        id: '002',
        link: 'https://touch.piao.qunar.com/touch/toSku.htm?skuId=436&skuName=%E5%BF%AB%E4%B9%90%E6%B9%BF%E8%BA%AB%EF%BC%8C%E6%B0%B4%E4%B8%8A%E7%8B%82%E6%AC%A2&cat=from_area%3Dts_sku%26from_index%3D1%26from_value%3D%25E5%25BF%25AB%25E4%25B9%2590%25E6%25B9%25BF%25E8%25BA%25AB%25EF%25BC%258C%25E6%25B0%25B4%25E4%25B8%258A%25E7%258B%2582%25E6%25AC%25A2%26dist_city%3D%25E9%2587%258D%25E5%25BA%2586',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1507/8e/f41005646c1e8e.jpg_r_640x214_65f25f65.jpg',
        title: '快乐湿身，水上狂欢',
        desc: '快乐湿身，水上狂欢”门票低至5折起'
      },
      {
        id: '003',
        link: 'https://touch.piao.qunar.com/touch/toSku.htm?skuId=142&skuName=%E9%87%8D%E5%BA%86%E5%BF%85%E6%89%93%E5%8D%A1&cat=from_area%3Dts_sku%26from_index%3D2%26from_value%3D%25E9%2587%258D%25E5%25BA%2586%25E5%25BF%2585%25E6%2589%2593%25E5%258D%25A1%26dist_city%3D%25E9%2587%258D%25E5%25BA%2586',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/53/4bcd11cc3a5374.jpg_r_640x214_988a4cee.jpg',
        title: '重庆必打卡',
        desc: '重庆，非去不可'
      },
      {
        id: '004',
        link: 'https://touch.piao.qunar.com/touch/toSku.htm?skuId=389&skuName=%E6%9C%AC%E5%9C%B0%E4%BA%BA%E5%B8%A6%E4%BD%A0%E8%80%8D&cat=from_area%3Dts_sku%26from_index%3D3%26from_value%3D%25E6%259C%25AC%25E5%259C%25B0%25E4%25BA%25BA%25E5%25B8%25A6%25E4%25BD%25A0%25E8%2580%258D%26dist_city%3D%25E9%2587%258D%25E5%25BA%2586',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1506/1e/f97881dbd07520.jpg_r_640x214_f8c25916.jpg',
        title: '本地人带你耍',
        desc: '玩转小面之都，High翻天'
      },
      {
        id: '005',
        link: 'https://touch.piao.qunar.com/touch/toSku.htm?skuId=144&skuName=%E9%87%8D%E5%BA%86%E5%A4%A7%E7%BE%8E%E5%8F%A4%E9%95%87&cat=from_area%3Dts_sku%26from_index%3D4%26from_value%3D%25E9%2587%258D%25E5%25BA%2586%25E5%25A4%25A7%25E7%25BE%258E%25E5%258F%25A4%25E9%2595%2587%26dist_city%3D%25E9%2587%258D%25E5%25BA%2586',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/48/f117e9b3bf582a.jpg_r_640x214_b8145711.jpg',
        title: '重庆大美古镇',
        desc: '行走重庆最美古镇，让你瞬间穿越千年'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .container
    background-color: #eee
    .weekend-title
      padding-left: .26rem
      font-size: .28rem
      line-height: .8rem
      color: $darkTextColor
    .weekend-list
      .weekend-list-item
        margin-bottom: .1rem
        background-color: #fff
        .list-item-fulllink
          .product-imgcontainer
            img
              width: 100%
          .product-info
            padding: .14rem .2rem .2rem .2rem
            .info-name
              padding-right: 1.4rem
              font-size: .28rem
              line-height: .48rem
              color: $darkTextColor
              ellipsis()
            .info-desc
              padding-right: 1.4rem
              font-size: .24rem
              line-height: .42rem
              color: $grayTextColor
              ellipsis()
      .weekend-list-item:last-child
        margin-bottom: 0
</style>
