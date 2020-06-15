<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title">您的位置</div>
        <ul class="city-list">
          <li class="city-list-item">重庆</li>
        </ul>
      </div>
      <div class="area">
        <div class="title">热门城市</div>
        <ul class="city-list">
          <li class="city-list-item" v-for="city in hot" :key="city.id">{{ city.name }}</li>
        </ul>
      </div>
      <div class="area" v-for="(alphabetValue, key) in all" :key="key" :ref="key">
        <div class="title">{{ key }}</div>
        <ul class="az-list">
          <li class="az-list-item border-bottom" v-for="cities in alphabetValue" :key="cities.id">{{ cities.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    all: Object,
    clickedLetter: String
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    clickedLetter () {
      let el = this.$refs[this.clickedLetter][0]
      this.scroll.scrollToElement(el)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .border-bottom
  &:before
    border-color: #ccc
  .list
    position: absolute
    top: 1.4rem
    right: 0
    bottom: 0
    left: 0
    overflow: hidden
    .title
      padding: .1rem .2rem
      background-color: #eee
      color: $grayTextColor
      font-size: .26rem
      line-height: .34rem
    .city-list
      padding: .1rem .6rem .1rem .3rem
      display: flex
      flex-wrap: wrap
      .city-list-item
        margin: .1rem .16rem
        width: 1.8rem
        height: .4rem
        line-height: .4rem
        font-size: .28rem
        text-align: center
        color: $darkTextColor
        border: .02rem solid #ccc
        border-radius: .06rem
    .az-list
      .az-list-item
        padding: .1rem .6rem .1rem .3rem
        height: .48rem
        line-height: .48rem
        color: $darkTextColor
        background-color: #fff
</style>
