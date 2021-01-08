<template>
   <div class="item">
      <div class="info">
         <div class="amount">{{ categoryItem.amount }}</div>
         <div class="name">
            {{ categoryItem.name }}
         </div>
      </div>
      <div class="actions">
         <div class="remove">-</div>
         <div class="add">+</div>
      </div>
      <item-list :item="categoryItem"/>
   </div>
</template>

<script>
import { ItemList } from "./ItemList";
import { ref } from "vue";
export default {
   props: { item: Object },
   components: ItemList,
   setup(props) {
      const categoryItem = ref({ ...props.item });
      console.log(categoryItem.value);

      return { categoryItem };
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

.item{
   display: flex;
   width: 100%;
   background: orange;
   justify-content: space-between;
   align-items: center;
   font-size: 18px;
   font-weight: 700;
   padding: 25px;
}
.actions, .info {
   display: flex;
   gap: 15px;
}
</style>