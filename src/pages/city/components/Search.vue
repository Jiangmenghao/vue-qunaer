<template>
  <div>
    <div class="search">
      <input class="search-input" type="text" v-model="keyword" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" v-show="keyword" ref="search">
      <ul>
        <li class="search-content-item border-bottom" v-for="city in searchResult" :key="city.id" @click="selectCity(city.name)">{{ city.name }}</li>
        <li class="search-content-item border-bottom" v-show="isNoResult">找不到匹配城市</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    all: Object
  },
  data () {
    return {
      keyword: '',
      searchResult: [],
      timer: null
    }
  },
  methods: {
    selectCity (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  computed: {
    isNoResult () {
      if (!this.searchResult.length) {
        return true
      } else {
        return false
      }
    }
  },
  watch: {
    keyword () {
      if (!this.keyword) {
        this.searchResult = []
        return
      }
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let result = []
        for (const area in this.all) {
          this.all[area].forEach(city => {
            if (city.name.includes(this.keyword) || city.spell.includes(this.keyword)) {
              result.push(city)
            }
          })
        }
        this.searchResult = result
      }, 100)
    }
  }
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
  .search-content
    background-color: #eee
    overflow: hidden
    position: absolute
    top: 1.4rem
    left: 0
    right: 0
    bottom: 0
    z-index: 1
    .search-content-item
      background-color: #fff
      line-height: .6rem
      padding-left: .3rem
      color: $grayTextColor
</style>
