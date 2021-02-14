<template>
   <div class="category-card">
      <div class="category-name">
         <h2 @click="toggleAddItem(category)">
            {{ category === "Food" ? category : category + "s" }}
         </h2>
      </div>
      <item-list :category="category" :items="items" :removeItem="removeItem" :toggleAddItem="toggleAddItem"/>
   </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
   components: { ItemList },
   props: { category: String, items: Object, removeItem: Function, toggleAddItem: Function },
};
</script>

<style src='../styles/CategoryCard.scss' lang="scss" scoped>
</style>