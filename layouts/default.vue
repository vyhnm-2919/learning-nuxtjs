<template>
  <div id="layout-container">
    <div class="default-layout">
      <div class="container p-3">
        <default-header />
        <div class="content-container rounded mt-4">
          <Nuxt />
          <v-modal v-slot="payload" name="test">
            <button
              @click.prevent="closeModal({ name: 'test' })"
              class="btn bg-transparent position-absolute top-0 right-0 bg-white text-dark font-weight-bold"
            >
              x
            </button>
            <div class="bg-light p-5">
              <h5>
                {{ payload && payload.id ? 'Edit todo' : 'Add todo' }}
              </h5>
              <TodoForm
                :todo="payload.payload"
                class="p-4"
                @submit="onSubmit"
              />
            </div>
          </v-modal>
          <v-modal name="delete" v-slot="id">
            <button
              @click.prevent="closeModal({ name: 'delete' })"
              class="btn bg-transparent position-absolute top-0 right-0 bg-white text-dark font-weight-bold"
            >
              x
            </button>
            <div class="bg-light p-5">
              <h5>
                Do you want to delete this todo? This action can't be undo.
              </h5>
              <button
                class="btn btn-danger"
                @click.prevent="deleteTodoItem(id)"
              >
                Delete
              </button>
            </div>
          </v-modal>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DefaultHeader from '@/components/Header/DefaultHeader'
import TodoForm from '~/components/Todos/TodoForm'
import { mapActions } from 'vuex'

export default {
  components: {
    DefaultHeader,
    TodoForm
  },
  methods: {
    ...mapActions(['addTodo', 'updateTodo', 'deleteTodo']),
    onSubmit(todo) {
      if (todo && !todo.id) {
        this.addTodo(todo)
      } else {
        this.updateTodo(todo)
      }
    },
    deleteTodoItem(id) {
      this.deleteTodo(id.payload)
      this.closeModal({ name: 'delete' })
    },
    closeModal(name) {
      this.$modal.close(name)
    }
  }
}
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#layout-container {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  background: #cf955a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.default-layout {
  padding: 20px;
  width:500px;
  background-color: #fff;
  text-align: center;
  position: fixed;
  top: 0;
  bottom: 0;
}

.right-0 {
  right: 0;
}
</style>
