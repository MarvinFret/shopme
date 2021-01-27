<template>
   <header>
      <div>$hopm€</div>
      <nav>
         <div class="menu-icon" @click="$emit('toggle-filter-list')">
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

<style src="../styles/AppHeader.scss" lang="scss" scoped>
</style>
