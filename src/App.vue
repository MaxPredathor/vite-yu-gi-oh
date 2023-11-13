<template>
  <LoaderComponent v-if="store.loaded"/>
  <div v-else>
    <YuGiHeader />
    <main class="container my-5">
      <input type="number" v-model="store.endPoint.num" :Keyup.enter="getData()">
      <div class="row">
        <div class="text-dark my-div my-3 fw-bold fs-4">
          Found {{ store.cardList.length }} cards
        </div>
        <CardComponent class="my-card col-2"
        :pic="card.card_images[0].image_url"
        :title="card.name"
        :cardType="card.type"
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
import axios from 'axios';
  export default {
    name: 'App',
    components: {
      YuGiHeader,
      CardComponent,
      LoaderComponent,
    },
    data(){
      return{
        store,
      }
    },
    methods: {
      getData(){
        axios.get(`${store.apiUrl}`, {params: store.endPoint}).then((response) =>{
          store.cardList = response.data.data
          store.loaded = false
        })    
      },
    },
    created(){
      this.getData() 
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