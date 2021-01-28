<template>
   <div class="filter-wrapper">
      <ul class="filter-wrapper__filter-list">
         <li
            class="filter-wrapper__filter"
            @click="$emit('set-Filter', 'All Categories')"
         >
            All
         </li>
         <li
            class="filter-wrapper__filter"
            @click="$emit('set-Filter', 'Food')"
         >
            Food
         </li>
         <li
            class="filter-wrapper__filter"
            @click="$emit('set-Filter', 'Drink')"
         >
            Drinks
         </li>
         <li
            class="filter-wrapper__filter"
            @click="$emit('set-Filter', 'Good')"
         >
            Goods
         </li>
      </ul>
   </div>
</template>
<script>
export default {};
</script>
<style src="../styles/FilterList.scss" lang="scss" scoped>
</style>