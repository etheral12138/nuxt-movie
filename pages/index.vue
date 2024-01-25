<template>
    <div class="flex flex-col py-10">
        <div>
            <h2 class="text-2xl font-bold text-center">Nuxt Movies</h2>
        </div>
        <div class="flex justify-center items-center h-32">
            <input type="text" class="px-2 py-1 border border-gray-800 rounded-md min-w-64"
                v-model="searchTerm"
                placeholder="Search for a movie" />
        </div>
        <!-- {{ searchTerm }} -->
        <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 
        xl:grid-cols-5 self-center gap-x-10 gap-y-10 mb-10">
        <div v-for="product in data">
            <img :src="product.image" alt="">
        </div>
        </div>
    </div>
</template>
<script setup lang="ts">
// import { type APIResponse } from '~/types/APIResponse';
import type { Movie } from '~/types/movie';
const searchTerm:Ref<string>=ref('')
// const products=ref<Movie[]>([])
const url=computed(()=>`api/movies/search`)
const {data}=useFetch(url)
watchEffect(()=>{
    console.log(searchTerm.value);
    const {data}=useFetch(url)
    console.log(data)
})
</script>
