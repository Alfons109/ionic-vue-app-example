<template>
  <base-page-layout page-title="JOE FRESH">
    <ion-label class="ion-text-wrap">
      <p class="title">Men's Clothing: New Arrivals</p>
    </ion-label>
    <products-list :products="products"></products-list>
  </base-page-layout>
</template>

<script>
import { IonLabel  } from  "@ionic/vue";
import ProductsList from "../components/products/ProductsList.vue";

export default {
  components: {
    IonLabel,
    ProductsList,
  },
  computed: {
    products() {
      return this.$store.getters.products;
    },
  },
};
</script>

<style scoped>
.title {
  color: var(--ion-color-tertiary);
  font-size: 20px;
  padding: 16px;
}
</style>
