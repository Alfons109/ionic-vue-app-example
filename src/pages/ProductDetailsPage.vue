<template>
  <base-page-layout
    :pageTitle="loadedProduct ? loadedProduct.title : 'loading...'"
    pageDefaultBacklink="/product"
  >
    <h2 v-if="!loadedProduct">Product not found.</h2>
    <product-details :product="loadedProduct"></product-details>
  </base-page-layout>
</template>
<script>
import ProductDetails from "../components/products/ProductDetails.vue";

export default {
  components: { ProductDetails },
  data() {
    return {
      productId: this.$route.params.id,
    };
  },
  computed: {
    loadedProduct() {
      return this.$store.getters.product(this.productId);
    },
  },
};
</script>
