<template>
   <div class="item" v-for="item in itemList" :key="item.index">
      <div class="info" v-if="item.category === category">
         <div class="amount">{{ item.amount }} x</div>
         <div class="name">{{ item.name }}</div>
      </div>
      <div class="actions">
         <div class="remove">-</div>
         <div class="add">+</div>
      </div>
   </div>
</template>


<script>
export default {
   props: { category: String, items: Object },
   computed: {
      itemList() {
         return this.items.filter((item) => item.category === this.category);
      },
   },
};
</script>


<style scoped>
.card-wrapper {
   width: 100%;
   background: #fff;
   border: 1px solid orange;
   margin-bottom: 25px;
}

.item {
   display: flex;
   width: 100%;
   justify-content: space-between;
   align-items: center;
   font-size: 14px;
   font-weight: 700;
   padding: 25px;
   border-bottom: 1px dotted #f4f4f4;
}

.actions,
.info {
   display: flex;
   gap: 15px;
}
</style>