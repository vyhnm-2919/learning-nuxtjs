<template>
  <todo-detail :todo="this.todo" />
</template>

<script>
import TodoDetail from '@/components/Todos/TodoDetail'
import axios from 'axios'

export default {
  components: { TodoDetail },
  asyncData(context) {
    return axios
      .get(`${process.env.baseApiUrl}/${context.params.id}`)
      .then(data => {
        return { todo: data.data }
      })
      .catch(e => context.error(e))
  }
}
</script>
