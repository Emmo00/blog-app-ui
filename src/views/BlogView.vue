<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue';
import BlogRecommendationComponent from '@/components/BlogRecommendationComponent.vue';
import BlogShareComponent from '@/components/BlogShareComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { getArticle } from '@/utils/requests';
import { onMounted } from 'vue';
import moment from 'moment';
import router from '@/router';

const route = useRoute()
const articleId = route.params.id;

const title = ref('')
const content = ref('')
const mainImage = ref('')
const description = ref('')
const pubDate = ref('')


onMounted(async () => {
  const response = await getArticle(articleId);
  if (!response.ok) {
    router.push('/404')
  }
  const article = (await response.json()).data
  title.value = article.title
  content.value = article.content
  mainImage.value =  article.main_image;
  description.value = article.description
  pubDate.value = 'Published on ' + moment(article.created_at).format('LL')
})



// const article = requestArticle(article_id)
</script>
<template>
  <NavBarComponent />
  <div class="container mx-auto py-12 px-4 md:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
      <div class="space-y-8">
        <div>
          <h1 class="text-6xl font-bold">{{ title }}</h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-3">{{ pubDate }}</p>
        </div>
        <div class="prose prose-gray dark:prose-invert max-w-none"><img v-if="mainImage" :src="mainImage"
            alt="Blog Cover Image" class="rounded-lg mb-4 w-full h-[400px] object-cover" />
          <div class="text-slate-400 pb-4 leading-6">
            {{ description }}
          </div>
          <froalaView v-model:value="content"></froalaView>
        </div>
      </div>
      <div class="space-y-8">
        <BlogRecommendationComponent :id="route.params.id" />
        <BlogShareComponent />
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
