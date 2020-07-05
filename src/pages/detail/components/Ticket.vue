<template>
  <div class="ticket-shelf-container">
    <div class="ticket-shelf">
      <h3 class="shelf-title">景区门票</h3>
      <div v-for="item in scenicTickets" :key="item.id">
        <p class="shelf-name">
          <span class="name-border"></span>
          <span class="name-text">{{ item.title }}</span>
        </p>
        <ul class="shelf-list">
          <detail-ticket-types v-for="type in item.ticketTypes" :key="type.id" :type="type"></detail-ticket-types>
        </ul>
      </div>
    </div>
    <div class="ticket-shelf">
      <h3 class="shelf-title">演出票</h3>
      <div v-for="item in showTickets" :key="item.id">
        <p class="shelf-name">
          <span class="name-border"></span>
          <span class="name-text">{{ item.title }}</span>
        </p>
        <ul class="shelf-list">
          <detail-ticket-types v-for="type in item.ticketTypes" :key="type.id" :type="type"></detail-ticket-types>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DetailPricelist from './Pricelist'
import DetailTicketTypes from './TicketTypes'
import axois from 'axios'
export default {
  name: 'DetailTicket',
  components: {
    DetailPricelist,
    DetailTicketTypes
  },
  data () {
    return {
      scenicTickets: [],
      showTickets: []
    }
  },
  methods: {
    getTicketsData () {
      axois.get('/api/tickets.json')
        .then(response => this.gotTicketsData(response.data))
    },
    gotTicketsData (resData) {
      if (resData.ret && resData.data) {
        this.scenicTickets = resData.data.scenicTickets
        this.showTickets = resData.data.showTickets
      }
    }
  },
  mounted () {
    this.getTicketsData()
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .ticket-shelf-container
    background-color: #eee
    .ticket-shelf
      padding: 0 .16rem .32rem
      margin-bottom: .2rem
      background-color: #fff
      .shelf-title
        title()
      .shelf-name
        display: flex
        align-items: center
        font-size: .32rem
        font-weight: bold
        line-height: .44rem
        color: $darkTextColor
        padding-top: .28rem
        .name-border
          min-width: .08rem
          height: .24rem
          margin-right: .12rem
          background-image: linear-gradient(126deg,#00e0ca 0,#00bfd4 100%)
          border-radius: .06rem
        .name-text
          ellipsis()
      .shelf-list
        margin: .32rem 0 .2rem
        padding: 0 .2rem
        border-radius: .16rem
        box-shadow: 0 0.04rem 0.12rem 0 rgba(0,0,0,0.10)
</style>
