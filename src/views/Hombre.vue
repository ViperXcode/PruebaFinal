<template>
    <v-container>
        <h1> Vestuario Hombre</h1>
            <v-row>
                <v-col cols="3">
                    <carritou></carritou>
                </v-col>
                    <v-col cols="9" v-for="item in ropashombre" :key="item.id">
                        <tarjetasc :item="item"> </tarjetasc>
                    </v-col>

            </v-row>
    </v-container>
</template>

<script>

import Carritouuu from '@/components/Carritouuu.vue'
import Tarjetascategoria from '@/components/Tarjetascategoria.vue'
import { mapState, mapActions, mapGetters } from 'vuex'


export default {
    name: 'hombre-view',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
                ...mapState(['ropashombre']),
                ...mapGetters(['mostrarcarrito'])
    },
    methods: {
        ...mapActions(['fetchMen'])
    },
    // watch: {},
    components: {
        'tarjetasc':Tarjetascategoria,
        'carritou':Carritouuu
    },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    created(){
        this.fetchMen()
    }
    // -- End Lifecycle Methods
}
</script>

<style scoped>
    
</style>