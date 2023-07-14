<template>
<v-container>

    <h1 class="display-2 text-center mb-4 red--text font-weight-bold">Tienda de todito</h1>

    <v-divider></v-divider>
    
        <v-row>
            <carrusel-c></carrusel-c>
         </v-row>

    <h3 class="display-2 text-center mb-4 red--text font-weight-bold mt-6">Nuestros productos</h3>

        <v-row>
            <tarjetas-c></tarjetas-c>
         </v-row>      



</v-container>
</template>

<script>
import { mapActions} from 'vuex'
import Carrusel from '@/components/Carrusel.vue'

import Tarjetasinicio from '@/components/Tarjetasinicio.vue'


export default {
    name: 'home-view',
    // props: {},
    data: function(){
        return {}
    },
    // computed: {},
    methods: {
                ...mapActions(['fetchdata'])
    },
    // watch: {},
    components: {
        'carrusel-c':Carrusel,
        'tarjetas-c':Tarjetasinicio
    },
    created(){
        this.fetchdata()
    }
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>