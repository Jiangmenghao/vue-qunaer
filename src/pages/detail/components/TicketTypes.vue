<template>
  <li class="list-item border-bottom">
    <div class="list-item-title">
      <h5 class="item-name">{{ type.type }}</h5>
      <div class="item-right">
        <div class="item-price">
          ¥<span class="price-num">{{ type.price }}</span>起
        </div>
        <span class="iconfont arrow-icon" :class="{ up : isRotate }" @click="isRotate = !isRotate">&#xe637;</span>
      </div>
    </div>
    <fade-animation>
      <detail-pricelist :list="type.tickets" v-show="isRotate"></detail-pricelist>
    </fade-animation>
  </li>
</template>

<script>
import DetailPricelist from './Pricelist'
import FadeAnimation from 'common/animation/FadeAnimation'

export default {
  name: 'DetailTicketTypes',
  props: {
    type: Object
  },
  components: {
    DetailPricelist,
    FadeAnimation
  },
  data () {
    return {
      isRotate: false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list-item
    overflow: hidden
    padding: .32rem 0
    .list-item-title
      display: flex
      .item-name
        flex: 1
        font-size: .3rem
        line-height: .48rem
        color: #333
      .item-right
        display: flex
        align-items: center
        .item-price
          font-size: .24rem
          color: #ff9800
          .price-num
            font-size: .4rem
        .arrow-icon
          margin-left: .08rem
          transition: transform .5s
        .up
          transform: rotate(.5turn)
</style>
