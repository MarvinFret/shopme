<template>
   <router-view />
</template>

<script>
export default {};
</script>

<style lang="scss">
:root {
   --primary-color: #ff8c22;
   --light-color: #fffcf9;
   --dark-color: #392008;
   --highlight-color: #ff8d222f;
   --dark-highlight-color: #ff8d22d0;
   --light-gray: #0000003b;
   --box-shadow-x: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
   --box-shadow-primary-color: 0 2px 4px 0 rgba(116, 64, 16, 0.486);
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
   &:active {
      background-color: var(--highlight-color);
      border: none;
      outline: none;
   }
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
   cursor: default;
   padding: 0;
   &:focus {
      outline:none;
   }
   &:active {
      background-color: var(--highlight-color);
   }
}

input:focus {
   outline: none;
}

.slide-in {
   transform: translate(0, 0) !important;
   visibility: visible !important;
}

.rotate-45-deg {
   transform: rotate(45deg) scale(0);
   opacity: 0;
}

.fade_in {
   opacity: 1 !important;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease-in;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(200px);
  opacity: 0;
}
</style>
