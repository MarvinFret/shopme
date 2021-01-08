import { items } from "../data";
import { ref } from "vue";

export default function allItems() {
   const allItems = ref(items);
   return { allItems };
}
