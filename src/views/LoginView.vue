<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import { login } from '@/utils/requests';
import { showToast } from '@/utils/toast';
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import persisty from 'persisty';
import auth from '@/utils/auth';

const router = useRouter()
const route = useRoute()
const email = ref('');
const password = ref('');

async function handleSubmit() {
    const response = await login(email.value, password.value);
    console.log(response, response.status)
    showToast("Authentication", response.message, response.status)
    if (response.status && response.token) {
        auth.login()
        persisty.api_token = response.token;
        router.push(route.query.redirect ?? '/')
        setTimeout(() => location.reload(), 1000)
    }
}
</script>

<template>
    <div class="min-h-screen flex flex-col">
        <div class="flex-1 py-8 px-6 md:px-8 lg:px-10">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-4">Login</h2>
                <form>
                    <div class="mb-4">
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="email">
                            Email
                        </label>
                        <input
                            class="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="email" name="email" type="email" v-model="email" />
                    </div>
                    <div class="mb-4">
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="password">
                            Password
                        </label>
                        <input
                            class="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="password" type="password" value="" name="password" v-model="password" />
                    </div>
                    <div class="flex justify-end space-x-2">
                        <button
                            class="bg-blue-950 text-slate-50 p-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            type="submit" @click.prevent="handleSubmit">
                            Login
                        </button>
                    </div>
                    <div class="w-full text-center">New User? <RouterLink to="/register" class="text-blue-500"> Create
                            New Account</RouterLink>
                    </div>
                </form>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>