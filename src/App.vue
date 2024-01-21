<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/login">Login</router-link>
  </nav> -->

    <!-- <router-view/> -->
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
import EnterLayout from '@/layouts/EnterLayout.vue'
import MainLayout from '@/layouts/MainLayout.vue'

  export default{
    computed: {
      layout() {
        return (this.$route.meta.layout || 'main') + '-layout'
      }
    },
    components: {
      EnterLayout, MainLayout
    }
  }
</script>

<style>
  #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
    }
</style>
