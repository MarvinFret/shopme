<template>
   <app-header></app-header>
   <router-view />
   <add-button />
   <add-item
      v-if="showAddItem"
      @toggle-AddItem="toggleAddItem"
      @addItem="addItem"
      :category="category"
   />
   <category-picker @toggle-AddItem="toggleAddItem" />
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AddButton from "@/components/AddButton";
import AddItem from "@/components/AddItem";
import CategoryPicker from "@/components/CategoryPicker";
import { ref, provide } from "vue";
import { items } from "./data";

export default {
   components: {
      AppHeader,
      AddButton,
      AddItem,
      CategoryPicker,
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
         // this.items.push(e);
      }
   },
   watch: {
itemList(){
   return console.log("change");
}
   },

   setup() {
      let showAddItem = ref(false);
      let category = ref("");
      let itemList = ref(items);

     provide("items", itemList);



      return { showAddItem, category, itemList };
   },
};
</script>

<style>
:root {
   --primary-color: #ff8c22;
   --light-color: #fffcf9;
   --dark-color: #392008;
   --box-shadow-x: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
   --cancel: #ab0000;
   --confirm: #0eab00;
}
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
}

#app {
   font-family: Quicksand, Helvetica, Arial, sans-serif;
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-align: center;
   color: var(--dark-color);
   background: var(--light-color);
}

ul {
   margin: 0;
   padding: 0;
}

li,
li a {
   text-decoration: none;
   list-style: none;
   color: inherit;
}

ul {
   padding-top: 1rem;
}

li a {
   font-size: 20px;
}

img {
   display: block;
   max-width: 100%;
   max-height: 100%;
}

button {
   background: none;
   border: none;
   cursor: pointer;
   padding: 0;
}

button:focus {
   outline: none;
}

input:focus {
   outline: none;
}

.slide-in {
   transform: translate(0, 0) !important;
   visibility: visible !important;
}
</style>
