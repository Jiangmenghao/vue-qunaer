<template>
  <div class="baseinfo">
    <div class="flex-box border-bottom">
      <div class="multi-data">
        <div>
          <div class="info">
            <span class="info-score">4.9</span>
            <span class="info-text">分</span>
            <span class="info-desc">很棒</span>
          </div>
          <div class="info-more">
            <span class="info-comment">570条评论</span>
            <span class="info-strategy">4条攻略</span>
          </div>
        </div>
        <span class="iconfont arrow-right">&#xe636;</span>
      </div>
      <div class="intro">
        <div class="intro-left">
          <div class="intro-left-up">景点简介</div>
          <div class="intro-left-down">开放时间、贴士</div>
        </div>
        <span class="iconfont arrow-right">&#xe636;</span>
      </div>
    </div>
    <div class="baseinfo-address">
      <span class="iconfont address-icon">&#xe65b;</span>
      <div class="address-text">重庆市北碚区北温泉公园</div>
      <span class="iconfont arrow-right">&#xe636;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseinfo'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .baseinfo
    position: relative
    top: -.1rem
    background-color #fff
    padding: .1rem .2rem 0 .2rem
    border-radius: .1rem .1rem 0 0
    .flex-box
      display: flex
      padding: .1rem 0 .2rem 0
      .multi-data
        flex: 1
        display: flex
        justify-content: space-between
        .info
          color: $priceColor
          .info-score
            font-size: .44rem
            line-height: .44rem
          .info-text
            font-size: .28rem
            line-height: .48rem
          .info-desc
            font-size: .28rem
            line-height: .48rem
            margin-left: .2rem
        .info-more
          font-size: .24rem
          line-height: .32rem
          color: #9e9e9e
          .info-comment
            margin-right: .2rem
      .intro
        flex: 1
        display: flex
        position: relative
        justify-content: space-between
        .intro-left
          padding-left: .3rem
          .intro-left-up
            font-size: .28rem
            line-height: .48rem
            color: $darkTextColor
          .intro-left-down
            font-size: .24rem
            line-height: .28rem
            color: #9e9e9e
      .intro:before
        content: ''
        position: absolute
        top: 0
        display: inline-block
        width: .02rem
        height: 100%
        background-color: rgb(224,224,224)
      .arrow-right
        font-size: .24rem
        line-height: .82rem
        margin-right: .2rem
    .baseinfo-address
      display: flex
      padding: .2rem 0
      line-height: .36rem
      color: #9e9e9e
      .address-icon
        font-size: .36rem
        margin-right: .2rem
      .address-text
        flex: 1
        font-size: .28rem
        color: $darkTextColor
      .arrow-right
        font-size: .24rem
        margin-right: .2rem
</style>
