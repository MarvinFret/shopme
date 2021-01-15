<template>
   <header>
      <div class="logo">$hopm€</div>
      <nav>
         <div class="menu-icon">
            <svg viewBox="0 0 100 70" width="30" height="30">
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
   width: 100vw;
   height: 55px;
}

rect {
   height: 20px;
   width: 100px;
   fill: #f4f4f4;
   rx: 8;
}

h1 {
   cursor: pointer;
   margin: 0;
   font-size: 24px;
   color: #fffcf9;
}
</style>
