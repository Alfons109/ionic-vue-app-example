<template>
  <ion-list>
    <products-list-item
      v-for="product in products"
      :key="product.id"
      :product="product"
    >
    </products-list-item>
  </ion-list>
</template>

<script>
import { IonList } from "@ionic/vue";
import ProductsListItem from "./ProductsListItem.vue";

export default {
  props: ["products"],
  components: {
    IonList,
    ProductsListItem,
  },
};
</script>
