<template>
    <ion-content class="ion-padding">
        <ion-header>
            <ion-toolbar>
                <img :src="item.frontal"
                    class="header-image" slot="start" />
                <ion-title>{{item.fecha}}</ion-title>
            </ion-toolbar>
        </ion-header>
        <h1 class="title">{{item.placa}}</h1>
        <div class="content">
            <div class="section">
                <p>Foto frontal</p>
                <img :src="item.frontal" />
            </div>
            <div class="section">
                <p>Foto lateral</p>
                <img :src="item.lateral" />
            </div>
            <div class="section">
                <p>Foto del kilometraje</p>
                <img :src="item.kilometraje" />
            </div>
            <div class="section">
                <p>Foto de las llantas</p>
                <img :src="item.llantas" />
            </div>
            <div class="section">
                <p>Foto de desperectos</p>
                <img :src="item.desperfectos" />
            </div>
        </div>

        <div class="close" @click="close">X</div>
    </ion-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import {
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    modalController,
} from '@ionic/vue';

export default defineComponent({
    components: {
        IonContent,
        IonHeader,
        IonTitle,
        IonToolbar,
    },
    props: ["item"],
    methods: {
        close() {
            return modalController.dismiss(null, "close");
        }
    }
});
</script>

<style scoped>
.header-image {
    height: 48px;
    border-radius: 10px;
    margin: 5px;
}

.close {
    color: red;
    font-weight: 200;
    font-size: larger;
    text-align: center;
    margin: 20px;
    padding: 5px;
}

.content {
    text-align: center;
}

.title {
    text-align: center;
}

.content>.section {
    margin-top: 20px;
}

.content>.section>img {
    border-radius: 15px;
}
</style>
