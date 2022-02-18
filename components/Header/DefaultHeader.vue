<template>
  <div class="d-flex justify-content-between align-items-center">
    <b-navbar-brand href="#">Todoapps</b-navbar-brand>
    <b-nav>
      <b-nav-item v-for="navLink in navbarList" :key="navLink.title">
        <nuxt-link :to="navLink.path" class="text-decoration-none">
          {{ navLink.title }}
        </nuxt-link>
      </b-nav-item>
    </b-nav>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navbarList: [
        {
          title: 'Home',
          path: '/'
        },
        {
          title: 'About',
          path: '/about'
        },
        {
          title: 'Todos',
          path: '/todos'
        }
      ]
    }
  }
}
</script>
<style>
.nuxt-link-exact-active.nuxt-link-active {
  color: red !important;
}
</style>
