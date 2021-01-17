<template>
   <div class="add-button-wrapper" @click="showCategoryPicker">
      <button>+</button>
   </div>
</template>

<script>
export default {
   methods: {
      showCategoryPicker() {
         const pickerWrapper = document
            .getElementsByClassName("picker-wrapper")
            .item(0);
         const addButton = document
            .getElementsByClassName("add-button-wrapper")
            .item(0);
         if (!pickerWrapper.classList.contains("slide-in")) {
            pickerWrapper.classList.add("slide-in");
            addButton.classList.add("rotate-45-deg");
         } else {
            pickerWrapper.classList.remove("slide-in");
            addButton.classList.remove("rotate-45-deg");
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
   transition: 300ms ease-in-out;
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