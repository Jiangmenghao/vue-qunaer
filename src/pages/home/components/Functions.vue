<template>
  <div class="container">
    <swiper>
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="functions-area">
          <div class="function" v-for="item in page" :key="item.id">
            <img class="function-img" :src="item.imgUrl" :alt="item.desc">
            <div class="function-desc">{{ item.desc }}</div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeFunctions',
  data () {
    return {
      functionList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      },
      {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      },
      {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      },
      {
        id: '004',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        desc: '泡温泉'
      },
      {
        id: '005',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',
        desc: '两江夜游'
      },
      {
        id: '006',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20191/de711920c71e38287d9f95f7910aa1aa.png',
        desc: '精品小团'
      },
      {
        id: '007',
        imgUrl: 'https://imgs.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '神秘武隆'
      },
      {
        id: '008',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
        desc: '重庆欢乐谷'
      },
      {
        id: '009',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/b71c1387a921ccf9c6edc7e8def3da90.png',
        desc: '重庆动物园'
      }]
    }
  },
  computed: {
    pages () {
      let pages = []
      this.functionList.forEach((item, index) => {
        let pageIndex = Math.floor(index / 8)
        if (!pages[pageIndex]) {
          pages[pageIndex] = []
        }
        pages[pageIndex].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .container
    height: 3.8rem
    .functions-area
      display: flex
      flex-wrap: wrap
      height: 3.8rem
      .function
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        overflow: hidden
        width: 25%
        height:50%
        .function-img
          width: 1.1rem
        .function-desc
          font-size: .28rem
          color: $darkTextColor
          width: 100%
          text-align: center
          ellipsis()
</style>
