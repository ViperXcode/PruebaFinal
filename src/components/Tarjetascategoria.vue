<template>
    <v-container>
        <v-card
            class="mx-auto"
            max-width="344"
        >
            <v-img
            :src="item.image"
            height="auto"
            ></v-img>
            <v-divider class="mt-5"></v-divider>
            <v-container>
            <h1 class="text-green">${{item.price}}</h1>
            </v-container>

            <v-card-title>
            {{item.title}}
            </v-card-title>

            <v-card-subtitle>
             {{item.description}}
            </v-card-subtitle>

            <v-card-actions>
            <v-btn
                color="green darken-2"
                text
                @click=add(item)
            >
                <v-icon>mdi-cart</v-icon>
                AGREGAR
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
                Disponible
                </v-card-text>
                  <div class="text-center">
                    <v-snackbar
                    v-model="snackbar"
                    :multi-line="multiLine"
                    >
                    {{ item.title}} Agregado al carrito

                    <template v-slot:action="{ attrs }">
                        <v-btn
                        color="green"
                        text
                        v-bind="attrs"
                        @click="snackbar = false"
                        >
                        Close
                        </v-btn>
                    </template>
                    </v-snackbar>
                </div>
            </div>
            </v-expand-transition>
        </v-card>
    </v-container>
</template>

<script>

import {mapActions} from 'vuex'
export default {
    name: 'tarjetascategoria-c',
    props: ["item"],

    data: function(){
        return {
            show: false,
                multiLine: true,
                snackbar: false,
                
            
        }
    },
    //computed: {},
    methods: {
        ...mapActions(['agregarProducto']),
        add(item){
            let prod={
                id:item.id,
                title:item.title,
                price:item.price,
                image:item.image,
                count:1,
            }
            this.agregarProducto(prod)
            this.snackbar=true
    }}
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