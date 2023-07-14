<template>
    <v-container>
        <v-row justify="space-around">
            <v-col cols="9" sm="6" md="3" v-for="tiposproducto in tiposproductos" :key="tiposproducto.name">
                <v-card 
                
                class="mx-auto my-9"
                max-width="344"
            >
                <v-img
                :src="tiposproducto.image"
                height="200px"
                ></v-img>

                <v-card-title>
                {{tiposproducto.title}}
                </v-card-title>

                <v-card-subtitle>
                {{tiposproducto.text}}
                </v-card-subtitle>

                <v-card-actions>
                <v-btn
                    color="orange lighten-2"
                    text
                >
                    ver más
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                </v-btn>
                </v-card-actions>

                <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                    I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
                    </v-card-text>
                </div>
                </v-expand-transition>
             </v-card>
            </v-col>
        </v-row>
    </v-container>

</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'tarjetas-inicio',
    // props: {},
    data: function(){
        return {
            loading: false,
            selection: 1,
        }
    },
    computed: {
        ...mapState(['mejoresproductos','tiposproductos'])
    },
    methods: {
        reserve () {
        this.loading = true
        setTimeout(() => (this.loading = false), 2000)
      },
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