<template>
   <div class="add-button-layover" @click.stop="showCategoryPicker">
      <div class="add-button-wrapper" @click.stop="showCategoryPicker">
         <svg width="50" height="50">
            <rect height="4" width="24" x="13" y="23"/>
            <rect height="24" width="4" x="23" y="13"/>
         </svg>
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

<style src="../styles/AddButton.css" lang="css" scoped>
</style>