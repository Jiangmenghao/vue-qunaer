<template>
  <div class="container">
    <div class="promote">
      <h3 class="promote-title">去哪儿推荐</h3>
      <detail-pricelist :list="list"></detail-pricelist>
    </div>
  </div>
</template>

<script>
import DetailPricelist from './Pricelist'
export default {
  name: 'DetailPromote',
  components: {
    DetailPricelist
  },
  data () {
    return {
      list: [
        { id: '001', title: '印象武隆实景演出普通票+往返中转车费', price: 220 },
        { id: '002', title: '【当日订】天生三桥旺季当天票【凭二代身份证取票入园】', price: 125 },
        { id: '003', title: '天生三桥证件免票（旺季）', price: 55 }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .container
    background-color: #eee
    padding: .2rem 0
    .promote
      background-color: #fff
      padding: 0 .16rem .3rem
      .promote-title
        title()
</style>
