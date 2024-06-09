<script setup>
defineProps(['pagination'])

const emit = defineEmits(['newPage'])
</script>

<template>
    <div class="flex justify-center mt-8">
        <nav aria-label="pagination" class="mx-auto flex w-full justify-center" role="navigation">
            <ul class="flex flex-row items-center gap-1">
                <li class="">
                <li class="">
                    <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pl-2.5"
                        aria-label="Go to previous page" href="#"
                        :class="{ 'pointer-events-none opacity-50': pagination.current_page === 1 }"
                        @click="emit('newPage', pagination.current_page - 1)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-chevron-left h-4 w-4">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        <span>Previous</span>
                    </a>

                </li>
                </li>
                <li class="">
                <li class="">
                    <a aria-current="page"
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                        href="#">
                        {{ pagination.current_page }}
                    </a>
                </li>
                </li>
                <li class="">
                <li class="">
                    <a class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 gap-1 pr-2.5"
                        aria-label="Go to next page" href="#" @click="emit('newPage', pagination.current_page + 1)"
                        :class="{ 'pointer-events-none opacity-50': pagination.current_page === pagination.last_page }">
                        <span>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-chevron-right h-4 w-4">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </a>
                </li>
                </li>
            </ul>
        </nav>
    </div>
</template>