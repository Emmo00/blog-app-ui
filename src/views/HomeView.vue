<script setup>
import NavBarComponent from "@/components/NavBarComponent.vue";
import BlogPreviewComponent from '@/components/BlogPreviewComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { getExploreArticles } from '@/utils/requests'
import { ref } from 'vue';
import { showToast } from "@/utils/toast";

const exploreBlogPosts = ref([]);
const pagination = ref({})

async function populateHomePage(page) {
    let response = await getExploreArticles(page);
    if (!response.ok) {
        showToast("Error", "an error occurred", false)
        return
    }
    response = await response.json();
    let blogsPosts = response.data.data;
    pagination.value = response.data
    exploreBlogPosts.value = blogsPosts;
}

populateHomePage()

</script>

<template>
    <div class="flex flex-col justify-between h-screen">
        <NavBarComponent />
        <main class="flex-1 py-8 px-6 md:px-8 lg:px-10">
            <section class="mb-8">
                <h2 class="text-2xl font-bold mb-4">Explore</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <BlogPreviewComponent v-for="blogPost in exploreBlogPosts" :key="blogPost.id" :id="blogPost.id"
                        :title="blogPost.title" :description="blogPost.description" :thumbnail="blogPost.thumbnail" />
                </div>
                <PaginationComponent :pagination="pagination" @new-page="populateHomePage" />
            </section>
        </main>
        <FooterComponent />

    </div>
</template>
