<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { ref, reactive } from 'vue';

const editorConfig = {
    events: {
        initialized: () => {
            console.log('editor ready')
        }

    }
}
const blogTitle = ref('');
const blogDescription = ref("");
const blogContent = ref('')

</script>
<template>
    <NavBarComponent />
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 p-4 md:p-6">
        <div class="space-y-6">
            <div class="grid gap-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="title">
                    Blog Title
                </label>
                <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="title" placeholder="Enter blog title" type="text" v-model="blogTitle" />
            </div>
            <div class="grid gap-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="thumbnail">
                    Thumbnail Image
                </label>
                <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="thumbnail" type="file" />
            </div>
            <div class="grid gap-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="mainImage">
                    Main Image
                </label>
                <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="mainImage" type="file" />
            </div>
            <div class="grid gap-2">
                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="title">
                    Short Description
                </label>
                <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="title" placeholder="Enter blog description" type="text" v-model="blogDescription" />
            </div>
            <div class="rounded-lg">
                <div class="p-4 prose prose-gray dark:prose-invert">
                    <froala id="edit" :tag="'textarea'" :config="editorConfig" v-model:value="blogContent"></froala>
                </div>
                {{ blogContent }}
            </div>
        </div>
        <div class="space-y-6">
            <div class="grid gap-2">
                <h1 class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Preview
                </h1>
                <h1>{{ blogTitle }}</h1>
                <div>
                    <froalaView v-model:value="blogContent"></froalaView>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
</template>