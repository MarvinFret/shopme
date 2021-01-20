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

<style scoped>
.add-item-layover {
   width: 100%;
   height: 100%;
   position: fixed;
   top: 0;
   left: 0;
   z-index: 5;
   background: rgba(0, 0, 0, 0.4);
   display: flex;
   justify-content: center;
   align-items: center;
   opacity: 0;
   transition: 300ms ease-in-out;
}

.component-wrapper {
   background: #fff;
   width: 320px;
   height: 210px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   padding: 25px;
   border-radius: 4px;
   z-index: 6;
}

.heading {
   font-weight: 700;
   font-size: 20px;
}

.details {
   display: flex;
   justify-content: space-between;
   font-size: 16px;
   width: 100%;
}

form {
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   height: 100%;
   padding-top: 20px;
}

.name,
.amount {
   display: flex;
   flex-direction: column;
   text-align: left;
   font-weight: 700;
   border-radius: 4px;
}

.details input:focus,
.amount:focus{
   border-bottom: 1px solid var(--primary-color);
   transition: 300ms;
}
.amount {
   width: 35%;
}

.details input {
   width: 100%;
   height: 35px;
   border: none;
   border-radius: 4px;
   background: #f4f4f4;
   text-align: inherit;
   font-size: 14px;
}

.amount-wrapper {
   display: flex;
   width: 100%;
   border-radius: 4px;
   background: #f4f4f4;
   text-align: center;
}

.edit {
   font-size: 16px;
   font-weight: 700;
}

.increment {
   color: var(--confirm);
   padding: 0 15px;
}
.decrement {
   color: var(--cancel);
   padding: 0 15px;
}

.actions {
   display: flex;
   justify-content: space-between;
   align-items: center;
}

.actions button {
   width: 120px;
   height: 35px;
   background: #fff;
   font-size: 16px;
   font-weight: 700;
   padding-top: 2px;
}

.cancel {
   color: var(--cancel);
   border-radius: 4px;
}
.confirm {
   color: var(--confirm);
   border-radius: 4px;
   transition: 300ms;
}

.confirm.inactive {
   color: lightgray;
   border-color: lightgray;
}
</style>