<script setup>
import NavBarComponent from "@/components/NavBarComponent.vue";
import BlogPreviewDashboard from '@/components/BlogPreviewDashboardComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
</script>

<template>
    <NavBarComponent />
    <main class="flex-1 py-8 px-6 md:px-8 lg:px-10">
        <section class="mb-8">
            <div class="flex items-center justify-between mb-4">
                <h2 class="text-2xl font-bold mb-4">Your Articles</h2>
                <RouterLink class="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 transition-colors" to="/blog/new">
                    New Article
                </RouterLink>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <BlogPreviewDashboard />
                <BlogPreviewDashboard />
                <BlogPreviewDashboard />
                <BlogPreviewDashboard />
                <BlogPreviewDashboard />
                <BlogPreviewDashboard />
            </div>
            <PaginationComponent />
        </section>
    </main>
    <FooterComponent />
</template>
