<template>
  <div>
    <div class="header">
      <div class="header-back">
        <a class="iconfont back-icon">&#xe635;</a>
      </div>
      <div class="header-search">
        <span class="iconfont">&#xe665;</span>
        <span>输入城市/景点/游玩主题</span>
      </div>
      <router-link to="/city">
        <div class="header-city">
          <span>{{ this.city }}</span>
          <span class="iconfont arrow-icon">&#xe639;</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
    display: flex
    line-height: .86rem
    background-color: $bgColor
    color: #fff
    .header-back
      width: .8rem
      text-align: center
      .back-icon
        display: block
        color: #fff
        margin-top: .26rem
        font-size: .36rem
        line-height: .36rem
    .header-search
      flex: 1
      padding: 0 .2rem
      color: #ddd
      line-height: .62rem
      background-color #fff
      border-radius: .1rem
      margin-top: .12rem
      height: .62rem
    .header-city
      min-width: 1.08rem
      padding: 0 .1rem
      text-align: center
      color: #fff
      .arrow-icon
        margin-left: -.04rem
</style>
