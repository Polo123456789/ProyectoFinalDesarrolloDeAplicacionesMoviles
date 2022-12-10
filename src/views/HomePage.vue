<template>
  <ion-page>

    <ion-content :fullscreen="true" class="app-container">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="secondary">
            <ion-button @click="signOut">
              <ion-icon slot="icon-only" :icon="enterOutline"></ion-icon>
            </ion-button>
          </ion-buttons>
          <img class="logo" src="/assets/icon/MiniIcon.jpeg" />
          <ion-title>Car 360</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button class="button-add" :router-link="{ path: '/registerTravel' }">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>

      <div class="projects-section">
        <div class="projects-section-header">
          <h2 style="text-align: center;">Historial de Viajes</h2>
        </div>
        <div class="projects-section-line">
            <!--
              <ion-card class="card-content">
                <ion-thumbnail class="">
                  <img alt="Foto Frontal" src= "https://ionicframework.com/docs/img/demos/thumbnail.svg"/>
                </ion-thumbnail>
                <ion-card-header>
                  <ion-card-title>P022REW</ion-card-title>
                  <ion-card-subtitle>December 12, 2022</ion-card-subtitle>
                  <ion-card-subtitle>Honda HRV</ion-card-subtitle>
                </ion-card-header>
              </ion-card>  
            -->

            <ion-card v-for="item in items" :key="item.placa" class="card-content" @click="verDetalles(item)">

              <img class="car" alt="Foto Frontal" :src="item.frontal" />

              <ion-card-header>
                <ion-card-title>{{ item.placa }}</ion-card-title>
                <ion-card-subtitle>{{ item.fecha}}</ion-card-subtitle>
                <ion-card-subtitle>{{ item.marca}}</ion-card-subtitle>
              </ion-card-header>
            </ion-card>

          </div>
        </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {
  IonContent,
  IonHeader,
  IonPage,
  IonButton,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonFab,
  IonFabButton,
  modalController,
  IonIcon,
  IonButtons,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';


import { add, enterOutline, carSportOutline, } from 'ionicons/icons';
import { defineComponent } from 'vue';
import { auth } from '@/firebase'
import { signOut } from 'firebase/auth'
import TravelDetailsModalVue from '@/components/TravelDetailsModal.vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonButton,
    IonCard,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButtons,
    IonTitle,
    IonToolbar,
  },
  methods: {
    signOut() {
      signOut(auth)
    },
    async verDetalles(item: any) {
      const modal = await modalController.create({
        component: TravelDetailsModalVue,
        componentProps: {
          item,
        }
      });
      modal.present();

      await modal.onWillDismiss();
    }
  },
  data() {
    return {
      add,
      enterOutline,
      carSportOutline,
      items: [
        {
          uid: "",
          placa: "P022REW",
          marca: "Honda HRV",
          fecha: "December 12, 2022",
          desperfectos: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          frontal: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          kilometraje: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          lateral: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          llantas: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        },
        {
          uid: "",
          placa: "P022REW",
          marca: "Honda HRV",
          fecha: "December 12, 2022",
          desperfectos: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          frontal: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          kilometraje: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          lateral: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          llantas: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        },
        {
          uid: "",
          placa: "P022REW",
          marca: "Honda HRV",
          fecha: "December 12, 2022",
          desperfectos: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          frontal: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          kilometraje: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          lateral: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
          llantas: "https://ionicframework.com/docs/img/demos/thumbnail.svg",
        },]
    }
  },
});

</script>

<style scoped>
ion-thumbnail {
  --size: 160px;
  --border-radius: 14px;
}

.logo {
  padding-left: 25px;
}

.card-content {
  display: grid;
  place-items: center;
}

.car {
  width: clamp(100px, 30vw, 500px);
}

.button-add {
  --background: #b7f399;
  --background-activated: #87d361;
  --background-hover: #a3e681;
  --border-radius: 25px;
  --box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, .3), 0px 1px 3px 1px rgba(0, 0, 0, .15);
  --color: black;
}
</style>