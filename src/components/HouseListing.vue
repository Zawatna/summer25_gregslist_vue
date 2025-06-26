<script setup>
import { House } from '@/models/House.js';

defineProps({
    houseProp: {type: House, required: true},
    coolGuy: { type: String }
})

</script>


<template>
<div class="shadow rounded-top house-border">
    <img :src="houseProp.imgUrl"
        :alt="`A picture of ${houseProp.creator.name}'s ${houseProp.bedrooms} ${houseProp.bathrooms} ${houseProp.levels}`"
        class="img-fluid house-img">
    <div class="p-3 bg-light">
        <div class="d-flex justify-content-between align-items-center mb-2">
        <p class="fs-3 fw-bold mb-0">{{ houseProp.year }}</p>
        
    </div>
        <p class="fs-5">{{ '$' + houseProp.price.toLocaleString() }}</p>
        <p>{{ houseProp.description }}</p>
        <div class="d-flex justify-content-between align-items-center">
        <time :datetime="houseProp.createdAt.toLocaleDateString()">
            {{ houseProp.createdAt.toLocaleDateString() }}
        </time>
        <div>
            <span>{{ houseProp.creator.name }}</span>
            <img :src="houseProp.creator.picture" :alt="houseProp.creator.name" class="ms-2 creator-img">
        </div>
    </div>
    </div>
    </div>
</template>


<style lang="scss" scoped>


.house-img {
  width: 100%;
  height: 40dvh;
  object-fit: cover;
}

.creator-img {
  height: 50px;
  aspect-ratio: 1/1;
  border-radius: 50%;
  object-fit: cover;
}

.house-border {
  border-style: double;
  border-width: thick;
  border-color: darkred;
  overflow-y: hidden;
}

.btn-outline-danger {
  opacity: 0;
  transition: all 300ms ease;
}

.house-border:hover .btn-outline-danger {
  opacity: 1;
}

</style>