<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>
<template>
    <div class="flex flex-col min-h-screen justify-between align-bottom">
        <NavBarComponent />
        <div class="flex-1 py-8 px-6 md:px-8 lg:px-10 flex items-center justify-center">
            <div class="max-w-md mx-auto text-center">
                <h1 class="text-4xl font-bold mb-4">404 - Page Not Found</h1>
                <p class="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
                <RouterLink to="/" class="text-slate-50 bg-blue-600 rounded-lg p-2">Go Home</RouterLink>
            </div>
        </div>
        <FooterComponent />

    </div>
</template>