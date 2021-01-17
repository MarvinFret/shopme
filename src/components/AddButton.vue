<template>
   <div class="add-button-layover" @click.stop="showCategoryPicker">
      <div class="add-button-wrapper" @click.stop="showCategoryPicker">
         <button>+</button>
      </div>
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
         const addButtonLayover = document
            .getElementsByClassName("add-button-layover")
            .item(0);
         if (!pickerWrapper.classList.contains("slide-in")) {
            pickerWrapper.classList.add("slide-in");
            addButtonLayover.style.height = "100%";
            addButton.classList.add("rotate-45-deg");
         } else {
            pickerWrapper.classList.remove("slide-in");
            addButtonLayover.style.height = "";
            addButton.classList.remove("rotate-45-deg");
         }
      },
   },
};
</script>

<style scoped>
.add-button-layover {
   width: 100%;
   display: inherit;
   position: absolute;
   top: 0;
}

.add-button-wrapper {
   position: fixed;
   right: 25px;
   bottom: 45px;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   font-size: 32px;
   z-index: 3;
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