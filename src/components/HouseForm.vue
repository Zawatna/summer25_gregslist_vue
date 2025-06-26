<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Modal } from 'bootstrap';
import { ref } from 'vue';


const editableHouseData = ref({
    bedrooms: 0,
    bathrooms: 0,
    levels: 0,
    imgUrl: '',
    year: new Date().getFullYear(),        
    price: 0,
    description: '',
})

async function submitHouse() {
    try {
      await housesService.createHouse(editableHouseData.value)

      editableHouseData.value = {
        bedrooms: 0,
        bathrooms: 0,
        levels: 0,
        imgUrl: '',
        year: new Date().getFullYear(),        
        price: 0,
        description: '',
      }
      Modal.getOrCreateInstance('#houseFormModal').hide()
    }
    catch (error){
      Pop.error(error);
      logger.error('could not create house listing')
    }

    
}
</script>


<template>
<form @submit.prevent="submitHouse()">
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.bedrooms" type="number" class="form-control" id="house-bedrooms" placeholder="Bedrooms..."
        required max="1000">
      <label for="house-bedrooms">Bedrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.bathrooms" type="number" class="form-control" id="house-bathrooms" placeholder="Bathrooms..."
        required max="1000">
      <label for="house-bathrooms">Bathrooms</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.levels" type="number" class="form-control" id="house-levels" placeholder="Levels..."
        required max="1000">
      <label for="house-levels">Levels</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.imgUrl" type="url" class="form-control" id="house-imgUrl" placeholder="Image..."
        maxLength="500">
      <label for="house-imgUrl">Image</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.year" type="number" class="form-control" id="house-year" placeholder="Year..."
        required max="2030">
      <label for="house-year">Year</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.price" type="number" class="form-control" id="house-price" placeholder="Price..."
        required max="1000000000">
      <label for="house-price">Price</label>
    </div>
    <div class="form-floating mb-3">
      <input v-model="editableHouseData.description" type="text" class="form-control" id="house-description" placeholder="Description..."
        maxLength="5000">
      <label for="house-description">Description</label>
    </div>
    <div class="d-flex justify-content-end gap-3">
      <button class="btn btn-outline-dark" type="button" data-bs-dismiss="modal" aria-label="Close">Close</button>
      <button class="btn btn-success" type="submit">
        Submit
      </button>
    </div>
</form>
    </template>


<style lang="scss" scoped>

</style>