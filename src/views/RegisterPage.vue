<template>
    <ion-page>
        <ion-header :translucent="true">
        </ion-header>
        <div class="login">
            <div class="form-container">
                <ion-img src="/public/assets/icon/logo.png" alt="logo" class="logo"></ion-img>

                <ion-label for="email" class="ion-label"
                    style="padding-left:10px !important; font-family:'Quicksand, sans-serif;'">Email</ion-label>
                <ion-input v-model="user" type="email" id="email" placeholder="admin@example.com"
                    class="ion-input ion-input-email"
                    style="padding-left:10px !important; font-family:'Quicksand, sans-serif;'"></ion-input>

                <ion-label for="password" class="ion-label"
                    style="padding-left:10px !important; font-family:'Quicksand, sans-serif;'">contraseña</ion-label>
                <ion-input v-model="password" type="password" id="password" placeholder="*********"
                    class="ion-input ion-input-password"
                    style="padding-left:10px !important; font-family:'Quicksand, sans-serif;'"></ion-input>

                <ion-button fill="solid" class="primary-ion-button login-ion-button" @click="onSubmit">Registrarse</ion-button>


                <ion-button fill="outline" class="secondary-ion-button signup-ion-button" @click="$router.push('/login')">Iniciar Sesion</ion-button>
            </div>
        </div>
    </ion-page>
</template>

<script lang="ts">
import {
    IonHeader,
    IonPage,
    IonImg,
    IonLabel,
    IonInput,
    IonButton,
} from '@ionic/vue';
import { defineComponent } from 'vue';
import { auth } from '@/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'

export default defineComponent({
    name: 'HomePage',
    components: {
        IonHeader,
        IonPage,
        IonImg,
        IonLabel,
        IonInput,
        IonButton,
    },
    data() {
        return {
            user: "",
            password: ""
        }
    },
    methods: {
        onSubmit() {
            createUserWithEmailAndPassword(auth, this.user, this.password)
                .then(credentials => {
                    this.$router.push('/home')
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    }
});



</script>