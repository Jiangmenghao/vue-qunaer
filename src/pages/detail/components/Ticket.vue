<template>
  <div>
    <div>ticket</div>
    <detail-pricelist></detail-pricelist>
  </div>
</template>

<script>
import DetailPricelist from './Pricelist'
export default {
  name: 'DetailTicket',
  components: {
    DetailPricelist
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'

</style>
