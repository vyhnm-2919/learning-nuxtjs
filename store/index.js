import Vuex from 'vuex'
import request from '~/api/axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      todos: []
    },
    mutations: {
      ADD_TODO: (state, todo) => {
        state.todos.push(todo)
      },
      UPDATE_TODO: (state, todo) => {
        const indexTodo = state.todos.findIndex(
          todoItem => todoItem.id === todo.id
        )
        state.todos[indexTodo] = todo
      },
      DELETE_TODO: (state, id) => {
        state.todos = state.todos.filter(todo => todo.id !== id)
      },
      GET_ALL_TODOS: (state, allTodos) => {
        state.todos = [...allTodos]
      },
      MARK_COMPLETED: (state, id) => {
        state.todos.map(todo => {
          if (todo.id === id) {
            todo.completed = !todo.completed
          }
          return todo
        })
      },
    },
    getters: {
      getTodos(state) {
        return state.todoList
      }
    },
    actions: {
      async nuxtServerInit({ commit }) {
        try {
          const response = await request.get(process.env.baseApiUrl)
          if (response && response.status === 200) {
            commit('GET_ALL_TODOS', response.data)
          }
        } catch (error) {
          console.log(error)
        }
      },
      async addTodo({ commit }, todo) {
        try {
          const response = await request.post(process.env.baseApiUrl, todo)
          if (response && response.status === 201) {
            commit('ADD_TODO', todo)
          }
        } catch (error) {
          console.log(error)
        }
      },
      async updateTodo({ commit }, todo) {
        console.log('todo update', todo)
        const abc = { ...todo }
        delete abc.id
        try {
          const response = await request.put(`${process.env.baseApiUrl}/${todo.id}`, abc)
          if (response && response.status === 201) {
            commit('UPDATE_TODO', todo)
          }
        } catch (error) {
          console.log(error)
        }
      },
      async markCompleted({ commit }, todo) {
        try {
          const response = await request.patch(`${process.env.baseApiUrl}/${todo.id}`, {
            completed: !todo.completed
          })
          if (response && response.status === 200) {
            commit('MARK_COMPLETED', todo.id)
          }
        } catch (error) {
          console.log(error)
        }
      },
      async deleteTodo({ commit }, id) {
        console.log(id)
        try {
          const response = await request.delete(`${process.env.baseApiUrl}/${id}`)
          if (response && response.status === 200) {
            commit('DELETE_TODO', id)
          }
        } catch (error) {
          console.log(error)
        }
      }
    }
  })
}

export default createStore
