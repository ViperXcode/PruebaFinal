import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresproductos:[],
    tiposproductos:[],
    ropashombre:[],
    carritouuu:[],
  },

  getters: {
    mostrarcarrito(state){
      return state.carritouuu
    }
  },

  mutations: {

    MTSET_BETTERPRODUCTS(state,mejoresproductos){
      state.mejoresproductos=mejoresproductos
    },

    MTSET_TYPESPRODUCTOS(state,tiposproductos){
          state.tiposproductos=tiposproductos
    },

    MTSET_MENWEAR(state,ropashombre){
      state.ropashombre=ropashombre
    },

    ADD_PRODUCT_TO_BAG(state,producto){

      let existe=state.carritouuu.some(p=>p.id==producto.id)

        if(existe==false){
          state.carritouuu.push(producto)
        }
        else{
          state.carritouuu.forEach(p=>{
            if(p.id==producto.id){
              p.count+=1;
            }
          })
        }
      

    }

  },

  actions: {

    async fetchdata({commit}){
      try{

          let response= await fetch('/home.json')
          let json = await response.json()
          console.log(json)
          let betterproducts=json.mejoresproductos
          let typesproducts=json.tiposproductos

          commit('MTSET_BETTERPRODUCTS',betterproducts)
          commit('MTSET_TYPESPRODUCTOS',typesproducts)

        }

      catch(error){
        console.log(error)
      }

    },

    async fetchMen({commit}){
      try{     
        
          let response= await fetch('/ropaHombre.json')
          let json = await response.json()
          console.log(json)
          let menwear=json
          console.log(menwear)

          commit('MTSET_MENWEAR',menwear)
        
        }

        catch(error){
        console.log(error)
       }

    },

    agregarProducto({commit},producto){
      commit('ADD_PRODUCT_TO_BAG',producto)
    }


  },
  modules: {
  }
})
