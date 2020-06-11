<template>
  <div>
    <city-header></city-header>
    <city-search></city-search>
    <city-list :hot="hotCities" :all="allCities"></city-list>
    <city-alphabet :az="alphabet"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      allCities: {},
      alphabet: []
    }
  },
  methods: {
    getCityData () {
      axios.get('/api/city.json')
        .then(response => this.gotCityData(response.data))
    },
    gotCityData (resData) {
      if (resData.ret && resData.data) {
        this.hotCities = resData.data.hotCities
        this.allCities = resData.data.cities
        this.alphabet = resData.data.alphabet
      }
    }
  },
  mounted () {
    this.getCityData()
  }
}
</script>

<style lang="stylus" scoped>

</style>
