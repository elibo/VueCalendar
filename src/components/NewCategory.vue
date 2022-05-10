<script setup lang="ts">
import {ref} from '@vue/reactivity'
import { useCategoryStore } from "@/stores/Category";

const store = useCategoryStore();
const newCategory = ref('');

const add = ()=>{
store.addCategory(newCategory.value)
newCategory.value='';
}
</script>

<template>
  <div>
    <input v-model="newCategory" v-on:keyup.enter="add" />
    <button @click="add">add</button>
  </div>
</template>
<style lang="scss">

</style>