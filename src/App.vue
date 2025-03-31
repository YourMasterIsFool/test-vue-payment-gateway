<script setup lang="ts">
import DefaultLayout from './components/layouts/DefaultLayout.vue';
import AuthenticatedLayout from './components/layouts/AuthenticatedLayout.vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute();
const layout = computed(() =>  route.meta.layout == 'authenticated' ? AuthenticatedLayout : DefaultLayout)

// import LoadingProcessAlert from '@/components/commons/alert/LoadingProcessAlert';


</script>

<template>
  <!-- <LoadingProcessAlert /> -->
  <component :is="layout">
    <router-view />
  </component>
</template>
