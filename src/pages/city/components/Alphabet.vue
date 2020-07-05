<template>
  <ul class="list">
    <li class="list-item" v-for="item in az"
      :key="item"
      :ref="item"
      @click="letterClicked"
      @touchstart.prevent
      @touchmove="touchMove"
    >{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    az: Array
  },
  data () {
    return {
      aToTop: 0,
      timer: null
    }
  },
  updated () {
    this.aToTop = this.$refs['A'][0].offsetTop
  },
  methods: {
    letterClicked (e) {
      this.$emit('letter-change', e.target.innerHTML)
    },
    touchMove (e) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        let clientY = e.touches[0].clientY
        let index = Math.floor((clientY - 80 - this.aToTop) / 20)
        if (index >= 0 && index < this.az.length) {
          this.$emit('letter-change', this.az[index])
        }
      }, 10)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .list
    position: absolute
    top: 1.4rem
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    width: .4rem
    .list-item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
