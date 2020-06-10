<template>
  <div class="container">
    <ul class="footer-nav">
      <li><a href="">登录</a></li>
      <li><a href="">我的订单</a></li>
      <li><a href="">最近浏览</a></li>
      <li><a href="">关于我们</a></li>
    </ul>
    <ul class="mobile-pc">
      <li class="active">
        <a href="">触屏版</a>
      </li>
      <li>
        <a href="">电脑版</a>
      </li>
    </ul>
    <div class="copyright">
      <span>Qunar 京ICP备05021087</span>
      <a href="https://touch.qunar.com/h5/feedback">意见反馈</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeFooter'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .container
    background-color: #eee
    .footer-nav
      display: flex
      justify-content: center
      border-bottom: 1px solid #cacaca
      li
        padding-left: .4rem
        font-size: .28rem
        line-height: .78rem
    .mobile-pc
      display: flex
      justify-content: center
      padding-top: .2rem
      li
        margin: 0 .3rem
        font-size: .28rem
      .active
        a
          color: black
    .copyright
      padding: .2rem
      font-size: .28rem
      text-align: center
      color: #9e9e9e
</style>
