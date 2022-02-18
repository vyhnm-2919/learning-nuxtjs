<template>
  <div class="error-page">
    <img src="/error-img.png" alt="error-img" />
    <nuxt-link to="/" class="error-page-btn">back to home</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'empty'
}
</script>
<style scoped>
.error-page {
  position: relative;
  width: 100%;
  height: 100%;
}

.error-page-btn {
  margin-bottom: 2rem;
  text-transform: uppercase;
  text-decoration: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  padding: 6px 12px;
  font-size: 20px;
}
</style>
