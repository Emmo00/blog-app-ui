<script setup>
import NavBarComponent from "@/components/NavBarComponent.vue";
import BlogPreviewDashboard from '@/components/BlogPreviewDashboardComponent.vue';
import PaginationComponent from '@/components/PaginationComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { onMounted, ref } from 'vue';
import { useRouter } from "vue-router";
import { getUserArticles } from '@/utils/requests';
import { showToast } from "@/utils/toast";

const userBlogPosts = ref([])
const noBlogPosts = ref(false);
const router = useRouter();
const pagination = ref({})

async function populateUserDashboard(page) {
    try {
        let response = await getUserArticles(page);
        if (response.status === 401) { router.push('/login?redirect=/dashboard'); return; }
        if (!response.ok) { showToast("Error", "An Error Occurred", false); return; }
        response = await response.json()
        let blogsPosts = response.data.data;
        pagination.value = response.data;
        if (blogsPosts.length === 0) noBlogPosts.value = true
        blogsPosts = blogsPosts.map((blog) => {
            blog.thumbnail = import.meta.env.VITE_SERVER_URL + '/storage/' + blog.thumbnail;
            return blog
        })
        userBlogPosts.value = blogsPosts;
    } catch (err) {
        showToast("Error", err, false);
        console.error(err);
    }
}

onMounted(() => {
    setTimeout(() => {
        populateUserDashboard()
    }, 0
    );
});


</script>

<template>
    <div class="min-h-screen flex flex-col">
        <NavBarComponent />
        <main class="flex-1 py-8 px-6 md:px-8 lg:px-10">
            <section class="mb-8">
                <div class="flex items-center justify-between mb-4">
                    <h2 class="text-2xl font-bold mb-4">Your Articles</h2>
                    <RouterLink class="bg-blue-500 hover:bg-blue-600 text-white rounded-md py-2 px-4 transition-colors"
                        to="/blog/new">
                        New Article
                    </RouterLink>
                </div>
                <div v-if="noBlogPosts" class="font-bold text-2xl text-center py-8">No Blog Posts yet.</div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <BlogPreviewDashboard v-for="blogPost in userBlogPosts" :key="blogPost.id" :id="blogPost.id"
                        :title="blogPost.title" :description="blogPost.description" :thumbnail="blogPost.thumbnail"
                        @blog-post-deleted="populateUserDashboard" />
                </div>
                <PaginationComponent v-if="!noBlogPosts" :pagination="pagination" @new-page="populateUserDashboard"/>
            </section>
        </main>
        <FooterComponent />
    </div>
</template>
