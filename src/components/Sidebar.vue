<script setup lang="ts">
const navs = [
    { path: '/', name: "Deposit" },
    { path: '/withdraw', name: "Withdraw" }
];
</script>

<template>
    <div class="w-[280px] h-screen fixed top-0 left-0 bg-white shadow-lg border-r border-gray-200 flex flex-col">
        <!-- Header -->
        <h1 class="text-2xl font-bold py-4 text-center text-green-700 border-b border-gray-100">
            Documentation
        </h1>

        <!-- Navigation Links -->
        <nav class="flex flex-col mt-4 space-y-2 px-4">
            <router-link v-for="route in navs" 
                :key="route.path" 
                :to="route.path"
                class="nav-link"
                active-class="active">
                {{ route.name }}
            </router-link>
        </nav>
    </div>
</template>

<style scoped>
.nav-link {
    @apply flex items-center px-4 py-3 text-base text-gray-700 font-medium rounded-lg transition-all duration-300;
}
.nav-link:hover {
    @apply bg-green-50 text-green-700;
}
.active {
    @apply bg-green-100 text-green-700 font-bold border-l-4 border-green-500;
}
</style>
