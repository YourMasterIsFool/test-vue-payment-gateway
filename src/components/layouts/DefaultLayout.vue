<script lang="ts"  setup>
    import Sidebar from '../Sidebar.vue';
</script>

<template>
    <div class="flex items-center">
        <Sidebar />
        <div class="ml-[300px] w-full"> 
            <slot>
            </slot>
        </div>
    </div>
</template>