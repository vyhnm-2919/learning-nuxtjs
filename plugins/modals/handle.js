import Layout from './layout'

const v_modal = {
  install(Vue) {
    this.EventBus = new Vue()
    Vue.component('v-modal', Layout)

    Vue.prototype.$modal = {
      open(params) {
        v_modal.EventBus.$emit('open', params)
      },
      close(params) {
        v_modal.EventBus.$emit('close', params)
      }
    }
  }
}
export default v_modal
