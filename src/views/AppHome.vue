<template>
   <div class="home">
      <h1 class="filter-name">All Categories</h1>
      <div class="card" v-for="category in categories" :key="category.index">
         <category-card v-bind:category="category" />
      </div>
   </div>
      <add-item
      v-if="showAddItem"
      @toggle-AddItem="toggleAddItem"
      @addItem="addItem"
      :category="category"
   />
      <category-picker @toggle-AddItem="toggleAddItem" />
     <add-button />
</template>

<script>
import CategoryCard from "@/components/CategoryCard";
import AddButton from "@/components/AddButton";
import CategoryPicker from "@/components/CategoryPicker";
import AddItem from "@/components/AddItem";
import { items } from "../data";
import {  ref, provide } from "vue";

// import * as Realm from "realm-web";

export default {
   components: {
      CategoryCard,
      AddButton,
      CategoryPicker,
      AddItem,
   },
   methods: {
toggleAddItem(category) {
         this.category = category;
         this.showAddItem = !this.showAddItem;
      },
      addItem(item) {
         console.log("received:");
         console.log(item);
         this.itemList.push(item);
         console.log(this.itemList);
      },
   },
   setup() {

      let showAddItem = ref(false);
      let categories = items.map((item) => item.category);
      categories = new Set(categories);


      let category = ref("");
      let itemList = ref(items);

      provide("items", itemList);

      return { showAddItem, items, categories, category, itemList  };
   },
};
</script>

<style scoped>
.home {
   height: 100%;
   width: 100%;
}
.category_item {
   background: linear-gradient(30deg, rgb(253, 207, 207), rgb(140, 140, 236));
   padding: 6rem;
}

.card {
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 25px 25px 15px;
}

.filter-name {
   font-weight: 700;
   font-size: 24px;
   text-align: left;
   padding: 20px 25px 0;
}
</style>
