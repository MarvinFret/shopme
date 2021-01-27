<template>
   <div class="category-card">
      <div class="category-name">
         <h2 @click="$emit('toggle-AddItem', category)">{{ category }}</h2>
      </div>
      <item-list :category="category" :items="items" :removeItem="removeItem" />
   </div>
</template>

<script>
import ItemList from "@/components/ItemList";

export default {
   components: { ItemList },
   props: { category: String, items: Object, removeItem: Function },
};
</script>

<style src='../styles/CategoryCard.scss' lang="scss" scoped>
</style>