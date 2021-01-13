<template>
   <div class="picker-wrapper">
      <ul class="category-list">
         <li class="category" @click="$emit('toggle-AddItem', 'Food')">Food</li>
         <li class="category" @click="$emit('toggle-AddItem', 'Drink')">Drink</li>
         <li class="category" @click="$emit('toggle-AddItem', 'Good')">Good</li>
      </ul>
   </div>
</template>

<script>
export default {
};
</script>

<style scoped>
.picker-wrapper {
   position: fixed;
   bottom: 0;
   background: #fff;
   width: 100%;
   box-shadow: 0 -1px 4px 0px rgba(0, 0, 0, 0.25);
   border-radius: 4px 4px 0 0;
   transform: translate(0, 175px);
   transition: 300ms ease-out;
}

ul.category-list {
   padding-top: 5px;
}

li.category {
   padding: 15px;
   margin: 0 25px;
   border-bottom: 1px dotted #333;
   font-size: 18px;
   font-weight: 700;
}
</style>