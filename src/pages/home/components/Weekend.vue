<template>
  <div class="container">
    <h2 class="weekend-title">周末去哪儿</h2>
    <ul class="weekend-list">
      <li class="weekend-list-item" v-for="item in list" :key="item.id">
        <a class="list-item-fulllink" :href="item.link">
          <div class="product-imgcontainer">
            <img :src="item.imgUrl" :alt="item.title">
          </div>
          <div class="product-info">
            <p class="info-name">{{ item.title }}</p>
            <p class="info-desc">{{ item.desc }}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .container
    background-color: #eee
    .weekend-title
      padding-left: .26rem
      font-size: .28rem
      line-height: .8rem
      color: $darkTextColor
    .weekend-list
      .weekend-list-item
        margin-bottom: .1rem
        background-color: #fff
        .list-item-fulllink
          .product-imgcontainer
            img
              width: 100%
          .product-info
            padding: .14rem .2rem .2rem .2rem
            .info-name
              padding-right: 1.4rem
              font-size: .28rem
              line-height: .48rem
              color: $darkTextColor
              ellipsis()
            .info-desc
              padding-right: 1.4rem
              font-size: .24rem
              line-height: .42rem
              color: $grayTextColor
              ellipsis()
      .weekend-list-item:last-child
        margin-bottom: 0
</style>
