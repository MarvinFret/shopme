<template>
   <div class="add-item-layover">
      <div class="component-wrapper">
         <h2 class="heading">Which {{ category }}?</h2>
         <form action="">
            <div class="details">
               <div class="name">
                  <label for="name">Name</label>
                  <input
                     type="text"
                     name="name"
                     placeholder="Name"
                     v-model="name"
                     autofocus
                  />
               </div>
               <div class="amount">
                  <label for="amount">Amount</label>
                  <div class="amount-wrapper">
                     <button
                        class="edit decrement"
                        @click.prevent="decrementAmount"
                     >
                        -
                     </button>
                     
                     <input
                        type="number"
                        name="amount"
                        v-model.number="amount"
                     />
                     <button
                        class="edit increment"
                        @click.prevent="incrementAmount"
                     >
                        +
                     </button>
                  </div>
               </div>
            </div>
            <div class="actions">
               <div>
                  <button
                     class="cancel"
                     @click.prevent="$emit('toggle-AddItem')"
                  >
                     Cancel
                  </button>
               </div>
               <div>
                  <button
                     class="confirm"
                     :class="name === '' ? 'inactive' : ''"
                     @click.prevent="sendFormData"
                  >
                     Add
                  </button>
               </div>
            </div>
         </form>
      </div>
   </div>
</template>

<script>
import { ref } from "vue";
export default {
   props: { category: String },
   methods: {
      incrementAmount() {
         this.amount++;
      },
      decrementAmount() {
         this.amount > 1 ? this.amount-- : false;
      },
      sendFormData() {
         if (this.name != "") {
            const item = {
               name: this.name,
               amount: this.amount.toString(),
               category: this.category,
            };
            this.$emit("addItem", item);
            this.$emit("toggle-AddItem");
         }
      },
   },
   setup() {
      const amount = ref(1);
      const name = ref("");

      return { name, amount };
   },
};
</script>

<style src="../styles/AddItem.scss" lang="scss" scoped>
</style>