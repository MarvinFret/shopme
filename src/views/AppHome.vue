<template>
<div class="cards" v-for="item in allItems" :key="item.index">
  {{item}}
  <category-card   :item="item"/>
</div>
</template>

<script>
  import CategoryCard from "@/components/CategoryCard";
  import { items } from "../data";
export default {
components: {
  CategoryCard,
},
setup() {
 const allItems = items;
   return { allItems };
}
};
</script>

<style scoped>
.category_item{
  background: linear-gradient(30deg, rgb(253, 207,207), rgb(140,140,236));
  padding: 6rem;
}

.cards{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 25px;
}
</style>
