<template>
  <LoaderComponent v-if="store.loaded"/>
  <div v-else>
    <YuGiHeader />
    <main class="container my-5">
      <div class="d-flex pt-4">
        <input type="number" v-model="store.endPoint.num" @keyup.enter="loadedTrue(), getData()">
        <button class="btn btn-success mx-3" @click="loadedTrue(), getData()">Cerca</button>
        <SelectComponent  @archetype-filter="filterArchetype"/>
      </div>
      <div class="row">
        <div class="alert alert-danger" v-if="store.error">
          {{ pippo.message }}
        </div>
        <div class="text-dark my-div my-3 fw-bold fs-4">
          Found {{ store.cardList.length }} cards
        </div>
        <CardComponent class="my-card col-2"
        :pic="card.card_images[0].image_url"
        :title="card.name"
        :cardType="card.type"
        :archetype="card.archetype"
        v-for="(card, index) in store.cardList" :key="index"/>
      </div>
    </main>
  </div>
</template>

<script>
import { store } from './data/store.js';
import YuGiHeader from './components/YuGiHeader.vue';
import CardComponent from './components/CardComponent.vue';
import LoaderComponent from './components/LoaderComponent.vue';
import SelectComponent from './components/SelectComponent.vue';
import axios from 'axios';
  export default {
    name: 'App',
    components: {
      YuGiHeader,
      CardComponent,
      LoaderComponent,
      SelectComponent,
    },
    data(){
      return{
        store,
        params: null,
      }
    },
    methods: {
      getData(){
        store.error = ""
        const url = store.apiUrl + store.card
        axios.get(url, {params: store.endPoint}).then((response) =>{
          console.log(url, {params: store.card + store.endPoint})
          store.cardList = response.data.data
          console.log(response.data.data)
          store.loaded = false
        })
        // .catch((pippo) => {
        //     console.log(pippo)
        //     this.store.error = pippo.message
        // }).finally(() =>{
        //     store.loaded = false
        // })

      },
      loadedTrue(){
        store.loaded = true
      },
      getType(){
        const typeUrl = store.apiUrl + store.archetypeUrl
        axios.get(typeUrl)
          .then(function (response) {
            store.archetypeList = response.data
            console.log(response.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      },
      filterArchetype(filter){
        if(filter){
          this.params = {
            archetype: filter
          }
        }else{
          this.params = null
        }
        this.getArchetype()
      },
      getArchetype(){
        const typeUrl = store.apiUrl + store.card
        axios.get(typeUrl, {params: this.params })
          .then(function (response) {
            store.cardList = response.data.data
            console.log(response.data.data)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });

      }
    },
    created(){
      this.getData()
      this.getType()
    }
  }
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;
    .my-div{
      height: 40px;
      width: 98.2%;
      margin: auto;
    }
    input{
      width: 25%
    }


</style>