<template>
  <ion-item :router-link="`/product/${product.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="product.image" :alt="product.title"></ion-img>
    </ion-thumbnail>

    <ion-label>
      <p class="title font-size">{{ product.title }}</p>
      <h2 class="price font-size">${{ product.price }}</h2>
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";

export default {
  props: ["product"],
  components: {
    IonItem,
    IonImg,
    IonThumbnail,
    IonLabel,
  },
};
</script>

<style scoped>
ion-thumbnail {
  width: 180px;
  height: 180px;
}
.title {
  color: var(--ion-color-tertiary);
  padding: 8px;
}
.price {
  padding: 8px;
}
.font-size {
  font-size: 20px;
}
</style>