<template>
  <ul class="list">
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
    <li class="list-item">A</li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet'
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
