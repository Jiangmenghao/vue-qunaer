<template>
  <div class="header">
    <router-link tag="div" to='/' class="header-single-back" v-show="isSingleBackShow">
      <span class="iconfont back-icon">&#xe635;</span>
    </router-link>
    <div class="header-main" v-show="!isSingleBackShow" :style="opacityStyle">
      <router-link tag="span" to='/' class="iconfont back-icon">&#xe635;</router-link>
      <div class="text">景点详情</div>
    </div>
  </div>
</template>>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      isSingleBackShow: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      let top = document.documentElement.scrollTop
      if (top > 46) {
        this.isSingleBackShow = false
        this.opacityStyle.opacity = (top < 180) ? (top / 180) : 1
      } else {
        this.isSingleBackShow = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'

  .header-single-back
    position: absolute
    left: .1rem
    top: .1rem
    width: .72rem
    height: .72rem
    line-height: .72rem
    border-radius: .36rem
    background-color: rgba(0, 0, 0, .5)
    font-size: .36rem
    color: #fff
    text-align: center
  .header-main
    position: fixed
    top: 0
    left: 0
    right: 0
    display: flex
    font-size: .32rem
    line-height: .88rem
    background-color: $bgColor
    color: #fff
    text-align: center
    .back-icon
      width: .8rem
      color: #fff
    .text
      flex: 1
      padding-right: .8rem
</style>
