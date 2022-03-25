<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button
            :default-href="pageDefaultBacklink"
          ></ion-back-button>
        </ion-buttons>

        <ion-title>{{ pageTitle }}</ion-title>


<ion-buttons slot="end" class="ion-padding-end" >
        <ion-icon @click="onShare($event)" :icon="shareSocialOutline" class="padding"></ion-icon>
        
        <ion-icon :icon="cartOutline" slot="end"
            @click="onClick($event)"
            color="primary-contrast"></ion-icon>
          
          <ion-text>
           {{ cartCount }}
          </ion-text>
</ion-buttons>
      
       
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <slot />
    </ion-content>
  </ion-page>
</template>

<script>
import { cartOutline, shareSocialOutline } from 'ionicons/icons';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
  IonContent,
  IonButtons,
  IonBackButton,
  IonIcon,
} from "@ionic/vue";

import { registerPlugin } from '@capacitor/core';
const Echo = registerPlugin('Echo');

export default {
  props: ["pageTitle", "pageDefaultBacklink"],

  computed: {
    cartCount() {
      return this.$store.getters.cartCount;
    },
  },
  data() {
    return {
      cartOutline,
      shareSocialOutline
    };
  },
  components: {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonText,
    IonContent,
    IonButtons,
    IonBackButton,
    IonIcon,
  },

  methods: {
    onClick() {
      this.$store.dispatch("removeFromCart", 1);
    },
     async onShare() {
        await Echo.share({value: this.cartCount});
    }
  },
};
</script>

<style>
.transparent-bkg {
  --background: transparent !important;
  --border-color: transparent !important;
}
.padding {
  padding-right: 16px;
}
.padding-cart {
  padding: 3px;
}
</style>
