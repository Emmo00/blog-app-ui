<script setup>
import { loggedIn } from '../utils/requests'
import { ref, onBeforeMount } from 'vue';
import auth from '@/utils/auth'


const isLoggedIn = ref(auth.isAuthenticated);
</script>

<template>
    <header class="bg-gray-900 text-white py-4 px-6 md:px-8 lg:px-10">
        <div class="container mx-auto flex items-center justify-between">
            <RouterLink to="/" class="text-xl font-bold"> MyBlog </RouterLink>
            <div class="flex items-center space-x-4">
                <!-- <form class="relative">
                    <input
                        class="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-800 text-white rounded-md py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-gray-600"
                        placeholder="Search posts..." type="search" />
                    <button
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 absolute right-2 top-1/2 transform -translate-y-1/2"
                        type="submit">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="h-5 w-5">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </svg>
                    </button>
                </form> -->
                <div v-if="isLoggedIn">
                    <RouterLink to="/dashboard"
                        class="bg-gray-800 hover:bg-gray-700 text-white rounded-md py-2 px-4 transition-colors">
                        Dashboard
                    </RouterLink>
                </div>
                <div v-else>
                    <div class="flex gap-4">
                        <RouterLink to="/login"
                            class="bg-gray-600 hover:bg-gray-500 text-white rounded-md py-2 px-4 transition-colors">
                            Login
                        </RouterLink>
                        <RouterLink to="/register"
                            class="bg-blue-700 hover:bg-blue-600 text-white rounded-md py-2 px-4 transition-colors">
                            Register
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
