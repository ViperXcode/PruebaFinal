<template>
    <v-container>
        <v-row>
            <v-col v-for="item in mostrarcarrito" :key="item.id">
              <v-card 
                    class="mx-auto"
                    max-width="300"
                    max-height="100"
                >
                    <v-img
                    :src="item.image"
                    height="auto"
                    ></v-img>

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
                        @click="show = !show"
                    >
                        <v-icon class="">{{ 'mdi-delete-circle' }}</v-icon>
                    </v-btn>
                    </v-card-actions>
                </v-card>    
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
        ...mapGetters(['mostrarcarrito'])
    },
    //methods: {}
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