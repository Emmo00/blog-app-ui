<script setup>
import NavBarComponent from "@/components/NavBarComponent.vue";
import BlogPreviewComponent from '@/components/BlogPreviewComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
    <NavBarComponent />
    <main class="flex-1 py-8 px-6 md:px-8 lg:px-10">
        <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Explore</h2>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <BlogPreviewComponent />
                <BlogPreviewComponent />
                <BlogPreviewComponent />
                <BlogPreviewComponent />
                <BlogPreviewComponent />
                <BlogPreviewComponent />
            </div>
            <PaginationComponent />
        </section>
    </main>
    <FooterComponent />
</template>
