<template>
   <div class="add-button-wrapper" @click="showCategoryPicker">
      <button>+</button>
   </div>
</template>

<script>
export default {
   methods: {
      showCategoryPicker() {
         const el = document.getElementsByClassName("picker-wrapper").item(0);
         if (!el.classList.contains("slide-in")) {
            el.classList.add("slide-in");
         } else {
            el.classList.remove("slide-in");
         }
      },
   },
};
</script>

<style scoped>
.add-button-wrapper {
   position: fixed;
   right: 35px;
   bottom: 45px;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   font-size: 32px;
   z-index: 2;
   background: var(--primary-color);
   box-shadow: var(--box-shadow-x);
}

.add-button-wrapper > button {
   width: 50px;
   height: 50px;

   border-radius: 50%;
   font-size: 32px;
   color: var(--light-color);
}

.add-button-wrapper > button:focus {
   border: none;
   outline: none;
}
</style>