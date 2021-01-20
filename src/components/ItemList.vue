<template>
   <div class="item" v-for="item in itemList" :key="item.index">
      <div class="info" v-if="item.category === category">
         <div class="amount">{{ item.amount }} x</div>
         <div class="name">{{ item.name }}</div>
      </div>
      <div class="actions">
         <div class="decrement" @click.prevent="decrementAmount(item)">-</div>
         <div class="increment" @click.prevent="incrementAmount(item)">+</div>
         <div class="remove" @click.prevent="removeItem(item.name)">
           &#10006;
         </div>
      </div>
   </div>
</template>


<script>
export default {
   props: { category: String, items: Object, removeItem: Function },

   methods: {
      incrementAmount(item) {
         item.amount++;
      },
      decrementAmount(item) {
         item.amount > 1 ? item.amount-- : false;
      },
   },
   computed: {
      itemList() {
         return this.items.filter((item) => item.category === this.category);
      },
   },
};
</script>


<style scoped>
.item {
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   font-size: 14px;
   font-weight: 700;
   height: 50px;
   padding: 0 20px 0 25px;
   border-bottom: 1px dotted #f4f4f4;
}

.info {
   display: flex;
   gap: 15px;
}

.actions {
   display: flex;
   align-items: center;
   font-size: 18px;
   height: 100%;
}
.increment {
   color: var(--confirm);
   padding: 5px 10px;
}
.decrement {
   color: var(--cancel);
   padding: 5px 10px;
}
.remove {
   color: #7a7a7a;
   font-size: 12px;
   padding: 5px 5px;
}
</style>