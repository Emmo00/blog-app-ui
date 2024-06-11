<script setup>
import { getArticleRecommendations } from '@/utils/requests';
import { ref } from 'vue';

const recommendations = ref([]);
const props = defineProps(['id'])
async function populateRecommendations() {
    const response = await getArticleRecommendations(props.id);
    recommendations.value = (await response.json()).data.map(article => {
        article.thumbnail = article.thumbnail
        return article
    });
}

populateRecommendations()
</script>
<template>
    <div class="bg-gray-100  rounded-lg p-4">
        <h2 class="text-lg font-bold mb-2">Related Posts</h2>
        <div class="space-y-4">
            <div v-for="article in recommendations" :key="article.id" class="flex items-start gap-4"><img
                    :src="article.thumbnail" alt="Related Post 1" width="80" height="80" class="rounded-md object-cover"
                    style="aspect-ratio:80/80;object-fit:cover" />
                <div>
                    <h3 class="text-base font-medium"><a href="#">{{ article.title }}</a></h3>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">{{ article.description }}</p>
                </div>
            </div>
        </div>
    </div>
</template>