<template>
  <ion-content class="ion-justify-content-center">


  <ion-item>
    <ion-label>Registro de viaje</ion-label>
  </ion-item>
  <ion-item>
    <ion-label>Placa: </ion-label>
    <ion-input placeholder="Numero de placa"></ion-input>
  </ion-item>

    <ion-grid>

    <ion-row class="ion-justify-content-center">
      <ion-col class="vertical-center">

          <ion-thumbnail>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
      </ion-col>
    </ion-row>

    <ion-row class="ion-justify-content-center">
      <ion-col>
        <ion-label>Foto frontal</ion-label>
      </ion-col>
    </ion-row>
    <ion-row class="ion-justify-content-center">
      <ion-col>
        <ion-button shape="round" size="small">Subir</ion-button>
      </ion-col>
    </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-label>Foto lateral</ion-label>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-button shape="round" size="small">Subir</ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-label>Foto del kilometraje</ion-label>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-button shape="round" size="small">Subir</ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-label>Foto de las llantas</ion-label>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-button shape="round" size="small">Subir</ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/thumbnail.svg" />
          </ion-thumbnail>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-label>Foto de desperfectos</ion-label>
        </ion-col>
      </ion-row>
      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-button shape="round" size="small">Subir</ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-button size="default">Registrar viaje</ion-button>
        </ion-col>
      </ion-row>


    </ion-grid>

  </ion-content>
</template>

<script lang="ts">
import { IonInput, IonItem, IonLabel, IonCol, IonGrid, IonRow, IonThumbnail   } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonInput, IonItem, IonLabel, IonCol, IonGrid, IonRow, IonThumbnail   },
});
</script>

<style scoped>

ion-grid {
  --ion-grid-columns: 1;
}
#container {
  text-align: center;
  
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-thumbnail {
  --size: 160px;
  --border-radius: 14px;
}

ion-col {
  text-align: center;
}

.vertical-center{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
