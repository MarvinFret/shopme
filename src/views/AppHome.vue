<template>
   <!-- <empty-state v-if="itemList.length === 0" /> -->
   <div class="home">
      <h1 class="filter-name">All Categories</h1>
      <div class="card" v-for="category in categories" :key="category.index">
         <category-card
            :category="category"
            :items="itemList"
            :removeItem="removeItem"
         />
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
// import EmptyState from "@/components/EmptyState";
import { ref } from "vue";

export default {
   components: {
      CategoryCard,
      AddButton,
      CategoryPicker,
      AddItem,
      // EmptyState,
   },
   data() {
      return {
         itemList: {},
         showAddItem: ref(false),
         category: ref(""),
      };
   },
   computed: {
      categories() {
         if (this.itemList.length === 0) return;
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
         this.setLocalStorage();
      },
      getLocalStorage() {
         let localStorage;
         if (!window.localStorage.getItem("items")) {
            localStorage = window.localStorage.setItem("items", [""]);
            return Array.from(window.localStorage.getItem("items"));
         }
         localStorage = window.localStorage.getItem("items");
         localStorage = JSON.parse(localStorage);
         return localStorage;
      },
      setLocalStorage() {
         window.localStorage.setItem("items", JSON.stringify(this.itemList));
      },
      removeItem(itemName) {
         this.itemList.find((item, index) => {
            if (item.name === itemName) {
               this.itemList.splice(index, 1);
               this.setLocalStorage();
               return;
            }
         });
      },
   },
   created: function () {
      this.itemList = this.getLocalStorage();
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
