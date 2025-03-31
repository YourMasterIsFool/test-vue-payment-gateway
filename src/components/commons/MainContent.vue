<script lang="ts" setup>
const props = defineProps(['title'])
</script>

<template>
    <div class="lg:p-20">
        <h1 class="font-bold lg:text-3xl lg:mb-4 mb-3">
            {{ props.title }}
        </h1>
        <div>   
            <slot>
            </slot>
        </div>
    </div>
</template>