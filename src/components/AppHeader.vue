<template>
   <header>
      <div class="logo">$hopm€</div>
      <nav>
         <div class="menu-icon">
            <svg viewBox="0 0 100 70" width="30" height="25">
               <rect></rect>
               <rect y="30"></rect>
               <rect y="60"></rect>
            </svg>
         </div>
      </nav>
   </header>
</template>

<script>
</script>
<style scoped>
header {
   width: 100vw;
   height: 55px;
   position: sticky;
   top: 0;
   left: 0;
   font-family: "Quicksand", cursive;
   letter-spacing: 1px;
   font-size: 24px;
   font-weight: 700;
   color: var(--light-color);
   display: flex;
   justify-content: space-between;
   align-items: center;
   background: var(--primary-color);
   padding: 0 25px;
   box-shadow: var(--box-shadow-primary-color);
   z-index: 5;
}

nav {
   height: 100%;
}

.menu-icon {
   margin-top: 50%;
}

rect {
   height: 14px;
   width: 100px;
   fill: #f4f4f4;
   rx: 6;
}

h1 {
   cursor: pointer;
   margin: 0;
   font-size: 24px;
   color: #fffcf9;
}
</style>
