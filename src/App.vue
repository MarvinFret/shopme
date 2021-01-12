<template>
   <app-header></app-header>
   <router-view />
   <add-button />
   <category-picker />
</template>

<script>
import AppHeader from "@/components/AppHeader";
import AddButton from "@/components/AddButton";
import CategoryPicker from "@/components/CategoryPicker";

export default {
   components: {
      AppHeader,
      AddButton,
      CategoryPicker,
   },
};
</script>

<style>
:root {
   --primary-color: #ff8c22;
   --light-color: #fffcf9;
   --dark-color: #392008;
   --box-shadow-x: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
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

@media only screen and (min-width: 600px) {
   .grid_wrapper {
      display: grid;
      margin-top: 25px;
      grid-template-columns: repeat(2, 1fr);
      gap: 15px;
   }
}
@media only screen and (min-width: 1000px) {
   .grid_wrapper {
      display: grid;
      margin-top: 25px;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;
   }
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

.slide-in {
   transform: translate(0, 0);
}
</style>
