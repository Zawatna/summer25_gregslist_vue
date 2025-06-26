<script setup>
import { AppState } from '@/AppState.js';
import HouseFormModal from '@/components/HouseFormModal.vue';
import HouseListing from '@/components/HouseListing.vue';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

const houses = computed(() => AppState.houses
)

onMounted(() => {
    getHouses()
})


async function getHouses(){
try {
  await housesService.getHouses()
}
catch (error){
  Pop.error(error);
  logger.log('could not get houses, error')
}
}


</script>


<template>
    <section class="container">
        <div class="row">
            <div class="col-12">
<div class="d-flex justify-content-center align-items-center">
                <h1 class="display-3">Houses <span class="mdi mdi-home"></span></h1>
                <button type="button" class="btn btn-outline-dark" data-bs-toggle="modal"
                data-bs-target="#houseFormModal"></button>
            </div>
            </div>
        </div>
    </section>
    <section class="container">
        <div class="row">
            <div v-for="house in houses" :key="house.id" class="col-md-4 mb-3"><HouseListing :houseProp="house" :coolGuy= "'Jay'"/>
            </div>
        </div>
    </section>
<HouseFormModal />
</template>


<style lang="scss" scoped></style>