<template>
  <div>
    <div>
      <div
        :data-modal="name"
        v-if="isVisible"
        class="modal position-fixed top-0 left-0 w-100 d-flex align-items-center justify-content-center"
      >
        <div
          aria-modal="true"
          data-reach-dialog-content="true"
          tabindex="-1"
          class="modal__mask"
        >
          <div class="modal__body position-relative">
            <slot :payload="payload" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import v_modal from './handle'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      payload: null,
      isVisible: false
    }
  },
  methods: {
    show(params) {
      this.isVisible = true
      this.payload = params.payload
    },
    close(params) {
      this.isVisible = false
    }
  },
  beforeMount() {
    // open event
    v_modal.EventBus.$on('open', params => {
      if (this.name === params.name) {
        this.show(params)
      }
    })
    //close event
    v_modal.EventBus.$on('close', params => {
      if (this.name === params.name) {
        this.close(params)
      }
    })
  }
}
</script>

<style scoped>
.modal {
  overflow-y: auto;
  height: 100vh;
  background: rgba(18, 18, 18, 0.8);
  z-index: 999;
  padding-bottom: 10px;
  padding-top: 10px;
}
</style>
