<script setup>
import HouseForm from './HouseForm.vue';


</script>


<template>
<div class="modal fade" id="houseFormModal" tabindex="-1" aria-labelledby="houseFormModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="houseFormModalLabel">List Your Home</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <HouseForm />
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save Changes</button>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>

</style>