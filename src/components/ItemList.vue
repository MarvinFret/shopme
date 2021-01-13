<template>
   <div class="item" v-for="item in items" :key="item.index">
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
import { inject } from "vue";
export default {
   props: { category: String },
   setup(props) {
      let items = inject("items");
      // console.log(props.category);
      // console.log(items);
      items = items.value.filter((item) => item.category === props.category);

      return { items };
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