<template>
   <app-header></app-header>
   <router-view />
</template>

<script>
import AppHeader from "@/components/AppHeader";



export default {
   components: {
      AppHeader,
   },
   setup() {   
   },
};
</script>

<style>
:root {
   --primary-color: rgb(255, 140, 34);
   --light-color: #fffcf9;
   --dark-color: #392008;
   --box-shadow-x: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
   --box-shadow-primary-color: 0 4px 4px 0 rgba(116, 64, 16, 0.486);
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
   height: 100vh;
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

.rotate-45-deg{
   transform: rotate(45deg);
}

.fade_in{
   opacity: 1 !important;
}
</style>
