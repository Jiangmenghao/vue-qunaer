<template>
  <div class="container">
    <div class="price-desc">
      <span class="price-desc-icon iconfont info">&#xe65a;</span>
      <div class="price-desc-info">
        <span class="high-light">票面价</span>是指通过景区指定窗口售卖的纸质门票上标注的价格
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeDesc'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .container
    background-color: #eee
    padding-top: .1rem
    .price-desc
      background-color: #fff
      color: $grayTextColor
      display: flex
      padding: .14rem .1rem
      font-size: .24rem
      .price-desc-icon
        line-height: .32rem
      .info
        font-size: .24rem
      .price-desc-info
        margin-left: .06rem
        line-height: .32rem
        .high-light
          font-weight: bold
</style>
