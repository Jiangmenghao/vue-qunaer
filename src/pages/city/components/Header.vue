<template>
  <div class="header">
    <router-link to="/">
      <div class="iconfont back-icon">&#xe635;</div>
    </router-link>
    <div class="text">城市选择</div>
  </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl'
  .header
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
