<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String, required: true
    },
    description: {
        type: String,
        required: true
    }

})


</script>
<template>
    <div class="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <img :src="thumbnail" alt="Blog Post" width="400" height="225" class="rounded-t-md"
            style="aspect-ratio: 400 / 225; object-fit: cover;" />
        <div class="p-4">
            <h3 class="text-lg font-bold mb-2">{{ title }}</h3>
            <p class="text-gray-500 mb-4">{{ description }}</p>
            <RouterLink class="text-blue-500 hover:underline" to="#">
                Read More
            </RouterLink>
        </div>
    </div>
</template>