<template>
  <div class="price-list">
    <div class="list-item border-bottom" v-for="item in list" :key="item.id">
      <div class="flex-left">
        <div>
          <h6 class="ticket-title">{{ item.title }}</h6>
          <div class="ticket-light">
            <span class="desctag">
              <img class="ticket-tagicon" src="https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20202/6489a65436e6dd60420dae78f46d25d6.png" alt="">
              {{ item.desc || "16:00前随买随用" }}
            </span>
          </div>
          <div class="ticket-labelcon">
            <span class="ticket-label" v-show="!item.supplier">
              <img class="ticket-tagicon" src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png" alt="">
              自营
            </span>
            <span class="ticket-label" v-show="item.supplier">无需换票</span>
            <span class="ticket-label">
              {{ item.supplier ? "随时退" : "条件退"}}
            </span>
          </div>
          <div class="ticket-supplier">
            <span>{{ item.supplier || "去哪儿直销"}}</span>
            <span class="ticket-infobtn border-left">预订须知</span>
            <span class="iconfont arrow-right">&#xe636;</span>
          </div>
        </div>
      </div>
      <div class="flex-right">
        <div class="link-container">
          <strong class="price">
            ¥<span class="price-num">{{ item.price }}</span>
          </strong>
          <a class="ticket-btn" href="">立即预订</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailPricelist',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .price-list
    background-color: #f8f8f8
    padding: 0 .32rem
    margin: .32rem 0 .2rem 0
    border-radius: .16rem
    .list-item
      padding: .32rem 0
      display: flex
      width: 100%
      .flex-left
        flex: 2.92
        .ticket-title
          font-size: .28rem
          line-height: .4rem
          color: #333
        .ticket-light
          overflow: hidden
          padding-top: .08rem
          .desctag
            display: inline-block
            font-size: .24rem
            height: .32rem
            line-height: .32rem
            color: #00afc7
            white-space: nowrap
        .ticket-labelcon
          font-size: 0
          padding-top: .08rem
          .ticket-label
            display: inline-block
            margin-top: .08rem
            padding: 0 .04rem
            font-size: .2rem
            height: .28rem
            line-height: .28rem
            color: #00afc7
            border: .02rem solid #a5e4ec
            border-radius: .08rem
            margin-right: .1rem
            white-space: nowrap
        .ticket-supplier
          display: flex
          margin-top: .12rem
          font-size: .24rem
          line-height: .34rem
          color: $grayTextColor
          .ticket-infobtn
            margin-left: .06rem
            padding-left: .1rem
          .border-left::before
            border-color: #bdbdbd
            height: .22rem
            top: .04rem
          .arrow-right
            font-size: .24rem
            line-height: .30rem
      .flex-right
        flex: 1
        display: flex
        justify-content: center
        align-items: center
        .link-container
          display: flex
          flex-direction: column
          align-items: center
          padding-left: .2rem
          .price
            color: $priceColor
            font-size: .24rem
            height: .4rem
            line-height: .28rem
            text-align: center
            .price-num
              font-size: .4rem
              line-height: .4rem
          .ticket-btn
            font-size: .24rem
            height: .52rem
            line-height: .52rem
            text-align: center
            color: #fff
            margin-top: .12rem
            padding: 0 .14rem
            border-radius: .3rem
            box-sizing: border-box
            background: linear-gradient(145deg, #ffab1e 0,#ff8c12 100%)
      .ticket-tagicon
        display: inline-block
        width: .2rem
        max-height: .32rem
        vertical-align: 0
</style>
