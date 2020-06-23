import state from './state'

let store = {
  debug: true,
  state,
  setCity (newValue) {
    if (this.debug) console.log('setCity triggered with', newValue)
    this.state.city = newValue
    try {
      localStorage.city = newValue
    } catch (e) {
      console.error(e)
    }
  }
}

export default {
  store: store
}
