<template>
    <v-container>
        <v-row>
            <v-col v-for="(item,index) in mostrarcarrito" :key="index">
              <v-card 
                    class="mx-auto"
                    max-width="300"       
                >
                    <v-col cols="12" sm="6" md="3">
                        <v-img
                        :src="item.image"
                        height="auto"
                        ></v-img>
                    </v-col>

                        <v-card-subtitle>
                        Precio: {{item.price}}
                        </v-card-subtitle>

                        <v-card-subtitle>
                        {{item.title}}
                        </v-card-subtitle>

                        <v-card-subtitle>
                        Cantidad: {{item.count}}
                        </v-card-subtitle>


                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn
                        icon
                        @click="borraritem(index)"
                    >
                        <v-icon class="">{{ 'mdi-delete-circle' }}</v-icon>
                    </v-btn>
                    
                    </v-card-actions>

                </v-card>    
            </v-col>
            <v-col>
                Total: $ {{(Number(totalCarro))}}
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'component-name',
    // props: {},
    data: function(){
        return {}
    },
    computed: {
        ...mapGetters(['mostrarcarrito','carritoProductos','totalCarro'])
    },
    methods: {
        borraritem(index){
            this.mostracarrito.splice(index,1)
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