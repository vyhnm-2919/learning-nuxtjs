<template>
  <div>
    <button
      type="button"
      class="btn btn-primary outline-none mb-3 d-block"
      @click.prevent="openModal"
    >
      Add Todo
    </button>

    <ul class="p-0 m-0 scrollbar-none">
      <TodoItem v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import TodoItem from '@/components/Todos/TodoItem'
import { mapState } from 'vuex'

export default {
  components: { TodoItem },
  head: {
    title: 'Todo Lists | To Do Apps'
  },
  computed: {
    ...mapState(['todos'])
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'test' })
    }
  }
}
</script>

<style scoped>
ul {
  height: 500px;
  overflow-y: scroll;
}

.scrollbar-none::-webkit-scrollbar {
  display: none;
}
</style>
