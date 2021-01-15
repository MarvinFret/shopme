<template>
   <div class="home">
      <h1 class="filter-name">All Categories</h1>
      <div class="card" v-for="category in categories" :key="category.index">
         <category-card :category="category" :items="itemList" />
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
import { ref } from "vue";

export default {
   components: {
      CategoryCard,
      AddButton,
      CategoryPicker,
      AddItem,
   },
   data() {
      return {
         itemList: ref(items),
         showAddItem: ref(false),
         category: ref(""),
      };
   },
   computed: {
      categories() {
         const categories = this.itemList.map((item) => item.category);
         return new Set(categories);
      },
   },
   methods: {
      toggleAddItem(category) {
         this.showAddItem = !this.showAddItem;
         this.showAddItem ? (this.category = category) : "";
      },
      addItem(item) {
         this.itemList.push(item);
      },
   },
   setup() {
      return {};
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
   font-size: 20px;
   text-align: left;
   padding: 20px 25px 0;
}
</style>
