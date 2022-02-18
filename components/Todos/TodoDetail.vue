<template>
  <div>
    <h1>Title: {{ todo.title }}</h1>
    <p>Description: {{ todo.description }}</p>
    <p>Completed: {{ todo.completed }}</p>
  </div>
</template>

<script>
export default {
  name: 'TodoDetail',
  head() {
    return {
      title: `${this.todo.title} | To Do Apps`
    }
  },
  props: ['todo']
}
</script>
