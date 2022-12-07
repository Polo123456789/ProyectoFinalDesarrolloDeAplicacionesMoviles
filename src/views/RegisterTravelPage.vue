<template>
  <ion-content class="ion-justify-content-center">
    <ion-item>
      <ion-label>Registro de viaje</ion-label>
    </ion-item>
    <ion-item>
      <ion-label>Placa: </ion-label>
      <ion-input placeholder="Numero de placa" v-model="placa"></ion-input>
    </ion-item>

    <ion-grid>

      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img :src="frontal" />
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
          <ion-button shape="round" size="small" @click="getFrontalPhoto">Subir</ion-button>
        </ion-col>
      </ion-row>


      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img :src="lateral" />
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
          <ion-button shape="round" size="small" @click="getLateralPhoto">Subir</ion-button>
        </ion-col>
      </ion-row>


      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img :src="kilometraje" />
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
          <ion-button shape="round" size="small" @click="getKilometrajePhoto">Subir</ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img :src="llantas" />
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
          <ion-button shape="round" size="small" @click="getLlantasPhoto">Subir</ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-col class="vertical-center">
          <ion-thumbnail>
            <img :src="desperfectos" />
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
          <ion-button shape="round" size="small" @click="getDesperfectosPhoto">Subir</ion-button>
        </ion-col>
      </ion-row>

      <ion-row class="ion-justify-content-center">
        <ion-col>
          <ion-button size="default" @click="registerTravel">Registrar viaje</ion-button>
        </ion-col>
      </ion-row>
    </ion-grid>

  </ion-content>
</template>

<script lang="ts">
import { IonInput, IonItem, IonLabel, IonCol, IonGrid, IonRow, IonThumbnail, IonContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { auth, storage, db } from '@/firebase'
import { User } from 'firebase/auth'
import {ref, uploadString, getDownloadURL} from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore'

const placeholderUrl = "https://ionicframework.com/docs/img/demos/thumbnail.svg"

const uploadPictureAndGetUrl = async (type: string): Promise<string>  => {
  const photo = await Camera.getPhoto({
    resultType: CameraResultType.Base64,
    quality: 100,
    source: CameraSource.Camera,
    
  });
  
  const metadata = {
    contentType: "image/png",
  }
  const uid = (auth.currentUser as User).uid;
  const path = `${uid}/${type}/${new Date().toISOString()}.png`

  const imgRef = ref(storage, path);

  if (!photo.base64String) {
    alert("No se ha podido tomar la imagen, intente de nuevo mas tarde")
    return "";
  }

  await uploadString(imgRef, photo.base64String, "base64", metadata)
  const url = await getDownloadURL(imgRef)
  
  console.log(url)

  return url;
}

export default defineComponent({
  components: { IonInput, IonItem, IonLabel, IonCol, IonGrid, IonRow, IonThumbnail, IonContent, IonButton },
  data() {
    return {
      placa: "",
      frontal: placeholderUrl,
      lateral: placeholderUrl,
      kilometraje: placeholderUrl,
      llantas: placeholderUrl,
      desperfectos: placeholderUrl,
    }
  },
  methods: {
    async getFrontalPhoto() {
      const url = await uploadPictureAndGetUrl("frontal");
      this.frontal = url ? url : placeholderUrl;
    },
    async getLateralPhoto() {
      const url = await uploadPictureAndGetUrl("lateral");
      this.lateral = url ? url : placeholderUrl;
    },
    async getKilometrajePhoto() {
      const url = await uploadPictureAndGetUrl("kilometraje");
      this.kilometraje = url ? url : placeholderUrl;
    },
    async getLlantasPhoto() {
      const url = await uploadPictureAndGetUrl("llantas");
      this.llantas = url ? url : placeholderUrl;
    },
    async getDesperfectosPhoto() {
      const url = await uploadPictureAndGetUrl("desperfectos");
      this.desperfectos = url ? url : placeholderUrl;
    },
    async registerTravel() {
      if (!this.placa) {
        alert("Tiene que ingresar el numero de placa");
        return;
      }

      const data = {
        placa: this.placa,
        frontal: this.frontal,
        lateral: this.lateral,
        kilometraje: this.kilometraje,
        llantas: this.llantas,
        desperfectos: this.desperfectos,
        uid: (auth.currentUser as User).uid
      }

      const travels = collection(db, "travels");
      const docRef = await addDoc(travels, data);
      console.log(`Guardado el viaje con el id: ${docRef.id}`);
      this.$router.push('/home');
    }
  },
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

.vertical-center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
