<template>
   <div class="category-card">
      <div class="category-name">
         <h2 @click="$emit('toggle-AddItem', category)">{{ category }}</h2>
         <span class="checkmark">&#10004;</span>
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

<style scoped>
.category-card {
   width: 100%;
   border-radius: 4px;
   background: #fff;
   box-shadow: var(--box-shadow-x);
}

.category-name{
   display: flex;
   align-items: center;
   justify-content: space-between;
      width: 100%;
   text-align: left;  
   padding: 25px 25px 0px;
}

.category-name h2 {
   font-size: 18px;
   font-weight: 700;
}

.checkmark{
   color: #7a7a7a;
}
.actions,
.info {
   display: flex;
   gap: 15px;
}
</style>