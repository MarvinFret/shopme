<template>
   <div class="picker-wrapper">
      <ul class="category-list">
         <li class="category" @click="$emit('toggle-AddItem', 'Food')">Food</li>
         <li class="category" @click="$emit('toggle-AddItem', 'Drink')">
            Drink
         </li>
         <li class="category" @click="$emit('toggle-AddItem', 'Good')">Good</li>
      </ul>
   </div>
</template>

<script>
export default {};
</script>

<style src="../styles/CategoryPicker.scss" lang="scss" scoped>
</style>