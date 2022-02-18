<template>
  <form @submit.prevent="onSubmit">
    <input
      type="text"
      placeholder="Enter your title"
      class="w-100"
      v-model="isEdit.title"
    />
    <input
      type="text"
      placeholder="Enter your description"
      class="w-100"
      v-model="isEdit.description"
    />
    <input
      type="submit"
      :value="isEdit && isEdit.id ? 'Save' : 'Add'"
      class="btn btn-primary w-100 mt-4"
    />
  </form>
</template>

<script>
export default {
  name: 'TodoForm',
  props: {
    todo: {
      type: Object,
      default: function () {
        return {
          title: '',
          description: '',
          completed: false
        }
      }
    }
  },
  data() {
    return {
      isEdit: this.todo
        ? { ...this.todo }
        : {
            title: '',
            description: '',
            completed: false
          }
    }
  },
  methods: {
    onSubmit() {
      this.$emit('submit', this.isEdit)
      this.closeModal()
    },
    closeModal() {
      this.$modal.close({ name: 'test' })
    }
  }
}
</script>

<style>
input[type='text'] {
  background-color: transparent;
  border: none;
  outline: none;
  height: 40px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  animation: all 0.25s;
}
</style>
