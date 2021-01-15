<template>
   <div class="layover">
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
                  />
               </div>
               <div class="amount">
                  <label for="amount">Amount</label>
                  <div class="amount-wrapper">
                     <button
                        class="edit increment"
                        @click.prevent="incrementAmount"
                     >
                        +
                     </button>
                     <input
                        type="number"
                        name="amount"
                        v-model.number="amount"
                     />
                     <button
                        class="edit decrement"
                        @click.prevent="decrementAmount"
                     >
                        -
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
            this.$emit('addItem', item);
            
         }
      },
   },
   setup() {
      let amount = ref(1);
      let name = ref("");

      return { name, amount };
   },
};
</script>

<style scoped>
.layover {
   width: 100vw;
   height: 100vh;
   position: absolute;
   top: 0;
   left: 0;
   z-index: 5;
   background: rgba(0, 0, 0, 0.4);
   display: flex;
   justify-content: center;
   align-items: center;
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
   font-size: 14px;
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
   border-bottom: 1px solid var(--primary-color);
}

.amount {
   width: 30%;
}

.details input {
   width: 100%;
   height: 30px;
   border: none;
   background: #f4f4f4;
   text-align: inherit;
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
   height: 40px;
   background: #fff;
   font-size: 18px;
   font-weight: 700;
   padding-top: 2px;
}

.cancel {
   border: 2px solid var(--cancel);
   color: var(--cancel);
   border-radius: 4px;
}
.confirm {
   border: 2px solid var(--confirm);
   color: var(--confirm);
   border-radius: 4px;
}

.confirm.inactive {
   color: lightgray;
   border-color: lightgray;
}
</style>