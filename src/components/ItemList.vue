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
            <span>+</span>
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


<style src="../styles/ItemList.scss" lang="scss" scoped>
</style>