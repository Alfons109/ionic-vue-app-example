<template>
  <ion-img :src="product.image" :alt="product.title"> </ion-img>
  <h2 class="ion-text-center title padding">{{ product.title }}</h2>
  <h2 class="ion-text-center">${{ product.price }}</h2>
  <br />
  <br />
  <br />
  <size-list></size-list>

  <br />
  <ion-button ion-item expand="block" fill="outline" @click="onClick($event)"
    >Add to cart</ion-button
  >
</template>

<script>
import { IonImg, IonButton } from "@ionic/vue";

import SizeList from "../widgets/SizeListWidget.vue";

import { registerPlugin } from "@capacitor/core";
const Echo = registerPlugin("Echo");

export default {
  props: ["product"],
  components: {
    IonImg,
    IonButton,
    SizeList,
  },
  methods: {
    onClick() {
      this.$store.dispatch("addToCart", 1);
      this.echo();
    },
    async echo() {
      const { value } = await Echo.echo({ value: "Hello Worldssss!" });
      console.log("Response from native:", value);
    },
  },
};
</script>

<style scoped>
.title {
  color: var(--ion-color-tertiary);
  font-size: 20px;
}
.padding {
  padding-right: 8px;
}
</style>
