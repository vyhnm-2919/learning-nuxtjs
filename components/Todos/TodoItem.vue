<template>
  <li
    class="list-unstyled text-left p-3 d-flex justify-content-between align-items-center user-select-none"
  >
    <input
      type="checkbox"
      :id="todo.title"
      :checked="todo.completed"
      class="mr-3"
      @click="markItemCompleted(todo)"
    />
    <h6
      :class="[
        'm-0 p-0 mr-auto font-weight-bold',
        todo.completed ? 'is-completed' : ''
      ]"
      @click="linkToDetail(todo.id)"
    >
      {{ todo.title }}
    </h6>
    <div class="d-flex">
      <button
        type="button"
        class="btn btn-danger mr-2"
        @click.prevent="openModal({ name: 'delete' })"
      >
        x
      </button>
      <button
        type="button"
        class="btn btn-info"
        @click.prevent="openModal({ name: 'test' })"
      >
        v
      </button>
    </div>
  </li>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  props: ['todo'],
  methods: {
    ...mapActions(['markCompleted']),
    markItemCompleted(todo) {
      this.markCompleted(todo)
    },

    linkToDetail(id) {
      this.$router.push(`/todos/${id}`)
    },
    openModal(name) {
      switch (name.name) {
        case 'test':
          this.$modal.open({ name: 'test', payload: this.todo })
          break
        case 'delete':
          this.$modal.open({ name: 'delete', payload: this.todo.id })
          break
        default:
          break
      }
    }
  }
}
</script>
<style scoped>
input[type='checkbox'] {
  width: 15px;
  height: 15px;
  padding: 10px;
}

.is-completed {
  color: #cf955a !important;
  text-decoration: line-through;
}
</style>
