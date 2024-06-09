<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { ref } from 'vue';
import persisty from 'persisty'


const editorConfig = {
    key: "8JF3bB2B6A4D2B3E2C1zdgmoxmcjmC-7iB2zA-13iG5G4E3E3A1B8D6D4F4F4==",
    toolbarButtons: [["bold", "italic", "underline",], ["insertImage", 'insertVideo', 'codeView', 'code']],
    imageUploadURL: import.meta.env.VITE_SERVER_URL + '/api/images',
    imageUploadMethod: 'POST',
    imageUploadParams: { 'user_id': persisty.user_id }
}
const blogTitle = ref('');
const blogThumbnail = ref();
const blogMainImage = ref();
const blogMainImageURL = ref('')
const blogDescription = ref("");
const blogContent = ref('')


function handleThumbnailUpload(event) {
    blogThumbnail.value = event.target.files[0];
}

function handleMainImageUpload(event) {
    blogMainImage.value = event.target.files[0]
    if (blogMainImage.value) blogMainImageURL.value = URL.createObjectURL(blogMainImage.value)
}

function submitForm() {
    const formData = new FormData();
    formData.append('title', blogTitle.value)
    formData.append('title', blogTitle.value)
    formData.append('title', blogTitle.value)
    formData.append('title', blogTitle.value)
    formData.append('title', blogTitle.value)
}

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
                    id="thumbnail" type="file" @change="handleThumbnailUpload" />
            </div>
            <div class="grid gap-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="mainImage">
                    Main Image
                </label>
                <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="mainImage" type="file" @change="handleMainImageUpload" />
            </div>
            <div class="grid gap-2">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="title">
                    Short Description
                </label>
                <input
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="title" placeholder="Enter blog description" type="text" v-model="blogDescription" />
            </div>
            <div class="rounded-lg">
                <label
                    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    for="title">
                    Content
                </label>
                <div class="prose prose-gray dark:prose-invert">
                    <froala id="edit" :tag="'textarea'" :config="editorConfig" v-model:value="blogContent"></froala>
                </div>
                {{ blogContent }}
            </div>
            <div>
                <button class="w-full bg-blue-900 text-slate-50 p-2 rounded-md hover:bg-blue-700"
                    @click="submitForm">Publish</button>
            </div>
        </div>
        <div class="space-y-6">
            <div class="grid gap-2">
                <h1 class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Preview
                </h1>
                <h1>{{ blogTitle }}</h1>
                <div>
                    <img v-if="blogMainImage" :src="blogMainImageURL" :alt="blogTitle">
                </div>
                <div>
                    {{ blogDescription }}
                </div>
                <div>
                    <froalaView v-model:value="blogContent"></froalaView>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent />
</template>