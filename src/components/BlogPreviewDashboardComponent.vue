<script setup>
import { deleteArticle } from '@/utils/requests';
import { showToast } from '@/utils/toast';


const props = defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  id: {
    type: Number,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
})

const emit = defineEmits(['blogPostDeleted'])

async function handleBlogDelete() {
  try {
    console.log(props.id);
    const response = await deleteArticle(props.id);
    if (response.ok) {
      showToast("Success", "Blog Post Deleted", true);
      emit('blogPostDeleted')
    }
    else showToast("Error", "Error deleting blog post", false)
  } catch (err) {
    showToast('Error', err, false)
    console.error(err);
  }
}
</script>
<template>

  <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
    <RouterLink :to="'/blogs/' + id">
      <img :src="thumbnail" alt="Blog Post" width="400" height="225" class="rounded-t-md"
        style="aspect-ratio: 400 / 225; object-fit: cover;" />
    </RouterLink>
    <div class="p-4">
      <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
      <p class="text-gray-500 mb-4">
        {{ description }}
      </p>
      <div class="flex items-center justify-between">
        <div class="px-2 py-1 rounded-md bg-green-500 text-white">Published</div>
        <div class="flex space-x-2">
          <RouterLink :to="'/blogs/edit/' + id"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z"></path>
            </svg>
          </RouterLink>
          <button @click="handleBlogDelete"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5">
              <path d="M3 6h18"></path>
              <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
              <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>