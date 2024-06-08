<script setup>
// import { requestArticle } from '../utils/requests';
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { ref } from 'vue';

const content = ref('')

// const article = requestArticle(article_id)
</script>
<template>
  <NavBarComponent />
  <div class="container mx-auto py-12 px-4 md:px-6 lg:px-8">
    <div class="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8">
      <div class="space-y-8">
        <div>
          <h1 class="text-3xl font-bold mb-2">Mastering React: A Beginner's Guide</h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm">Published on May 15, 2023</p>
        </div>
        <div class="prose prose-gray dark:prose-invert max-w-none"><img src="/placeholder.jpg" alt="Blog Cover Image"
            class="rounded-lg mb-4 w-full h-[400px] object-cover" />
          <froalaView v-model:value="content"></froalaView>
        </div>
      </div>
      <div class="space-y-8">
        <div class="bg-gray-100  rounded-lg p-4">
          <h2 class="text-lg font-bold mb-2">Related Posts</h2>
          <div class="space-y-4">
            <div class="flex items-start gap-4"><img src="/placeholder.jpg" alt="Related Post 1" width="80" height="80"
                class="rounded-md object-cover" style="aspect-ratio:80/80;object-fit:cover" />
              <div>
                <h3 class="text-base font-medium"><a href="#">Exploring the Power of React Hooks</a></h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Discover how React Hooks can simplify your code
                  and
                  improve your development workflow.</p>
              </div>
            </div>
            <div class="flex items-start gap-4"><img src="/placeholder.jpg" alt="Related Post 2" width="80" height="80"
                class="rounded-md object-cover" style="aspect-ratio:80/80;object-fit:cover" />
              <div>
                <h3 class="text-base font-medium"><a href="#">Building a React-powered E-commerce Site</a></h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Learn how to create a robust and scalable
                  e-commerce
                  application using React.</p>
              </div>
            </div>
            <div class="flex items-start gap-4"><img src="/placeholder.jpg" alt="Related Post 3" width="80" height="80"
                class="rounded-md object-cover" style="aspect-ratio:80/80;object-fit:cover" />
              <div>
                <h3 class="text-base font-medium"><a href="#">Optimizing React Performance</a></h3>
                <p class="text-gray-500 dark:text-gray-400 text-sm">Discover techniques to improve the performance of
                  your React applications.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="bg-gray-100  rounded-lg p-4">
          <h2 class="text-lg font-bold mb-2">Share this post</h2>
          <div class="flex items-center gap-4"><button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <path
                  d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z">
                </path>
              </svg></button><button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg></button><button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect width="4" height="12" x="2" y="9"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg></button><button
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5">
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect>
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path>
              </svg></button></div>
        </div>
      </div>
    </div>
  </div>
  <FooterComponent />
</template>
