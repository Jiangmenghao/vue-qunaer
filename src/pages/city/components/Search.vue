<template>
  <div class="search">
    <input class="search-input" type="text" placeholder="输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'CitySearch'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height: .52rem
    padding: 0 .2rem
    background-color: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      padding: 0 .1rem
      text-align: center
      border-radius: .06rem
      color: $grayTextColor
</style>
