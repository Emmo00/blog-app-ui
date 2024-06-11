<script setup>
import NavBarComponent from '@/components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { ref } from 'vue';
import persisty from 'persisty'
import { newArticle, getArticle, updateArticle } from '@/utils/requests'
import { showToast } from '@/utils/toast';
import router from '@/router';
import { useRoute } from 'vue-router';

const route = useRoute();
const editorConfig = {
    key: "8JF3bB2B6A4D2B3E2C1zdgmoxmcjmC-7iB2zA-13iG5G4E3E3A1B8D6D4F4F4==",
    toolbarButtons: [["bold", "italic", "underline",], ["insertImage", 'insertVideo', 'codeView', 'code']],
    imageUploadURL: import.meta.env.VITE_SERVER_URL + '/api/images',
    imageUploadMethod: 'POST',
    imageUploadParams: { 'user_id': persisty.user_id }
}

if (route.params.id) {
    populateForm(route.params.id)
}

const blogTitle = ref('');
const blogThumbnail = ref();
const blogMainImage = ref();
const blogMainImageURL = ref('')
const blogDescription = ref("");
const blogContent = ref('')

async function populateForm(id) {
    console.log('populating')
    const response = await getArticle(id);
    if (!response.ok) {
        router.push('/404')
    }
    const article = (await response.json()).data;

    blogTitle.value = article.title;
    blogMainImageURL.value =  article.main_image;
    blogDescription.value = article.description
    blogContent.value = article.content;
}

function handleThumbnailUpload(event) {
    blogThumbnail.value = event.target.files[0];
}

function handleMainImageUpload(event) {
    blogMainImage.value = event.target.files[0]
    if (blogMainImage.value) blogMainImageURL.value = URL.createObjectURL(blogMainImage.value)
}

async function submitUpdateForm() {
    const formData = new FormData();
    formData.append('title', blogTitle.value)
    formData.append('thumbnail', blogThumbnail.value)
    formData.append('main_image', blogMainImage.value)
    formData.append('description', blogDescription.value)
    formData.append('content', blogContent.value)

    console.log(formData)
    console.log(blogTitle.value)
    let response = await updateArticle(route.params.id, formData);
    if (!response.ok) {
        showToast("Error", "an error occurred", false)
    }
    response = await response.json();
    showToast("Message", response.message, response.status);
    if (response.status) router.push('/blogs/' + response.data.id);
}

async function submitForm() {
    if (route.params.id) {
        return submitUpdateForm()
    }
    const formData = new FormData();
    formData.append('title', blogTitle.value)
    formData.append('thumbnail', blogThumbnail.value)
    formData.append('main_image', blogMainImage.value)
    formData.append('description', blogDescription.value)
    formData.append('content', blogContent.value)
    let response = await newArticle(formData);
    if (!response.ok) {
        showToast("Error", "an error occurred", false)
    }
    response = await response.json();
    showToast("Message", response.message, response.status);
    if (response.status) router.push('/blogs/' + response.data.id);
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
            </div>
            <div>
                <button class="w-full bg-blue-900 text-slate-50 p-2 rounded-md hover:bg-blue-700"
                    @click="submitForm">Publish</button>
            </div>
        </div>
        <div class="space-y-6">
            <div class="grid gap-2">
                <h1 class="text-lg font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                    Preview
                </h1>
                <h1 class="text-6xl my-2 font-bold">{{ blogTitle }}</h1>
                <div class="w-full">
                    <img v-if="blogMainImageURL" :src="blogMainImageURL" :alt="blogTitle"
                        class="rounded-lg mb-4 w-full h-[400px] object-cover">
                </div>
                <div class="text-slate-400 pb-4 leading-6">
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