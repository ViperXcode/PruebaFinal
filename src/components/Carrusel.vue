<template>

<v-carousel v-model="model">
    <v-carousel-item
      v-for="mejorproducto in mejoresproductos"  height="700px" width="1000px" class="mx-auto" :key="mejorproducto.title" :src="mejorproducto.image"
    >

        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h6 white--text">
            {{mejorproducto.title}}
          </div>
        </v-row>

    </v-carousel-item>
  </v-carousel>
  
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: 'Carrusel-c',
    // props: {},
    data: function(){

        return {

      model: 0,
      colors: [
        'primary',
        'secondary',
        'yellow darken-2',
        'red',
        'orange',
      ],
        }
    },
    computed: {
        ...mapState(['mejoresproductos','tiposproductos'])

    },
    
    methods: {},


    // watch: {},
    //components: {},
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>