<script setup>
import FooterComponent from '@/components/FooterComponent.vue';
import { register } from '@/utils/requests';
import auth from '@/utils/auth';
import { showToast } from '@/utils/toast';
import { ref } from 'vue';
import persisty from 'persisty';
import { useRoute, useRouter } from 'vue-router';

const name = ref('');
const email = ref('');
const password = ref('');
const route = useRoute();
const router = useRouter();

async function handleSubmit() {
    try {
        let response = await register(name.value, email.value, password.value);
        response = await response.json()
        showToast("Authentication", response.message, response.status)
        if (response.status && response.token) {
            auth.login()
            persisty.api_token = response.token;
            router.push(route.query.redirect ?? '/')
            setTimeout(() => location.reload(), 1000)
        }
    } catch (err) {
        showToast('Error', err, false)
        console.error(err);
    }
}
</script>

<template>
    <div class="min-h-screen flex flex-col justify-between">
        <div class="flex-1 py-8 px-6 md:px-8 lg:px-10">
            <div class="max-w-md mx-auto">
                <h2 class="text-2xl font-bold mb-4">Register</h2>
                <form>
                    <div class="mb-4">
                        <label
                            class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            for="name">
                            Name
                        </label>
                        <input
                            class="flex h-10 w-full border border-input text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            id="name" type="text" value="" name="name" v-model="name" />
                    </div>
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
                            class="bg-blue-950 p-2 text-slate-50 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            type="submit" @click.prevent="handleSubmit">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <FooterComponent />
    </div>
</template>