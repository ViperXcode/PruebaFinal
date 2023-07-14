<template>
  <v-app>
    <nav-bar></nav-bar>

    <v-main>
      <router-view/>
    </v-main>
    <footer-c></footer-c> 
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
    components:{
    'nav-bar':NavBar,
    'footer-c':Footer
  }
};
</script>
