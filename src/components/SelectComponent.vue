<template>
    <select name="archetype" id="" v-model="textSelect" @change="$emit('archetypeFilter', textSelect)">
        <option value="">All</option>
        <option v-for="archetype in store.archetypeList"
        :value="archetype.archetype_name">{{ archetype.archetype_name }}</option>
    </select>
</template>

<script>
import { store } from '../data/store.js';
    export default {
        name: 'SelectComponent',
        data(){
            return{
                store,
                textSelect: "",
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>