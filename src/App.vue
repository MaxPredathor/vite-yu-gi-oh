<template>
  <YuGiHeader />
  <main class="container">
    <div class="row">
      <CardComponent class="my-card col-2"
      :pic="card.card_images[0].image_url"
      :title="card.name"
      :cardType="card.type"
      v-for="(card, index) in store.cardList" :key="index"/>
    </div>
  </main>
</template>

<script>
import { store } from './data/store.js';
import YuGiHeader from './components/YuGiHeader.vue';
import CardComponent from './components/CardComponent.vue';
import axios from 'axios';
  export default {
    name: 'App',
    components: {
      YuGiHeader,
      CardComponent,
    },
    data(){
      return{
        store,
      }
    },
    methods: {
      getData(){
        axios.get(`${store.apiUrl}`, {params: store.endPoint}).then((response) =>{
          console.log(response.data.data);
          store.cardList = response.data.data
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


</style>