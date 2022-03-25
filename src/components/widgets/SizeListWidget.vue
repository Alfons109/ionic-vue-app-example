<template>
  <h4>Size</h4>

  <ion-radio-group @ionChange="onChange($event)">
    <ion-grid>
      <ion-row>
        <ion-col v-for="size in sizes" :key="size.size">
          <ion-item>
            <ion-label>{{ size.size }}</ion-label>
            <ion-radio
              slot="start"
              color="medium"
              :checked="size.isChecked"
              :value="size.size"
            >
            </ion-radio>
          </ion-item>
        </ion-col>
      </ion-row>
    </ion-grid>
  </ion-radio-group>
</template>

<script>
import {
  IonRadioGroup,
  IonRadio,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
} from "@ionic/vue";

export default {
  data() {
    return {
      sizes: [
        { size: "S", isChecked: false },
        { size: "M", isChecked: false },
        { size: "L", isChecked: false },
      ],
    };
  },
  components: {
    IonRadio,
    IonRadioGroup,
    IonItem,
    IonGrid,
    IonRow,
    IonCol,
    IonLabel,
  },
  methods: {
    onChange($event) {
      console.log($event);
    },
  },
};
</script>
