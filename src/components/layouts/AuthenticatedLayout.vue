<script lang="ts" setup>
    import Header from '@/components/commons/header/Header.vue'
</script>
<template>
    <div class="">
        <Header />
        <div class="lg:mt-24">
            <slot></slot>
        </div>
    </div>
</template>