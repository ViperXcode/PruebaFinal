<template>
<div>
    <v-app-bar
      color="deep-purple"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>TIENDA DE TODITO</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>


          <v-list-item v-for="route in routes" :key="route.name" :to="route.path" :disabled="currentRoute==route.name">
            <v-list-item-icon>
              <v-icon>{{route.icon}}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{route.title}}</v-list-item-title>
          </v-list-item>


        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
    name: 'nav-bar',
    // props: {},
    data: function(){
        return {
                drawer: false,
                group: null,
                routes:[
                  {
                    icon:'mdi-home',
                    title:'Inicio',
                    path: '/',
                  },

                  {
                    icon:'mdi-face-outline',
                    title:'Ropa Hombre',
                    path: '/Hombre',
                  },

                  {
                    icon:'mdi-face-woman',
                    title:'Ropa Mujer',
                    name:'Home'
                  },

                  {
                    icon:'mdi-ipod',
                    title:'Electrónica',
                    name:'Home'
                  },

                  {
                    icon:'mdi-cart-arrow-right',
                    title:'Carrito',
                    name:'Home'
                  },

                  {
                    icon:'mdi-account',
                    title:'Contactanos',
                    path: '/about',
                  },
                ]
              }
    },

    computed: {
            currentRoute(){
            return this.$route.name
            }
    },
    
    methods: {
      redirectTo(nameRoute){
        this.$router.push({name:nameRoute})
      }
    }
    // watch: {},
    // components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>