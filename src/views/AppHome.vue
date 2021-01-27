<template>

   <empty-state v-if="itemList.length === 0" />

   <div v-else class="home" id="mydiv">
      <h1 class="filter-name" id="mydivheader">All Categories</h1>
      <div class="card" v-for="category in categories" :key="category.index">
         <category-card
            :category="category"
            :items="itemList"
            :removeItem="removeItem"
            @toggle-AddItem="toggleAddItem"
         />
      </div>
   </div>

   <add-item
      v-if="showAddItem"
      @toggle-AddItem="toggleAddItem"
      @addItem="addItem"
      :category="category"
      :class="{fade_in: showAddItem}"
   />
 
   <category-picker @toggle-AddItem="toggleAddItem" />
   <add-button /> 

</template>

<script>
import CategoryCard from "@/components/CategoryCard";
import AddButton from "@/components/AddButton";
import CategoryPicker from "@/components/CategoryPicker";
import AddItem from "@/components/AddItem";
import EmptyState from "@/components/EmptyState";
// import enableSwipe from "@/composables/enableSwipe";
import { ref } from "vue";

export default {
   components: {
      CategoryCard,
      AddButton,
      CategoryPicker,
      AddItem,
      EmptyState,
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
         localStorage = JSON.parse(window.localStorage.getItem("items"));
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
   mounted: function() {
  this.$nextTick(function () {
    // Code that will run only after the
    // entire view has been rendered
   //   enableSwipe();
  })
}
};
</script>

<style src="../styles/AppHome.scss" lang="scss" scoped>

</style>
