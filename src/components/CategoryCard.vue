<template>
   <div class="category-card">
      <h2 class="category-name">{{ category }}</h2>
      <item-list :category="category" :items="items" />
   </div>
</template>

<script>
import ItemList from "@/components/ItemList";
export default {
   components: { ItemList },
   props: { category: String, items: Object },
};
</script>

<style scoped>
.category-card {
   width: 100%;
   border-radius: 4px;
   background: #fff;
   box-shadow: var(--box-shadow-x);
}

.category-name {
   width: 100%;
   text-align: left;
   font-size: 18px;
   font-weight: 700;
   padding: 25px 25px 0px;
}
.actions,
.info {
   display: flex;
   gap: 15px;
}
</style>