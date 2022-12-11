<template>
    <ion-page>
        <ion-header :translucent="true">
        </ion-header>
        <div class="login">
            <div class="form-container">
                <ion-img src="/assets/icon/logo.png" alt="logo" class="logo"></ion-img>
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
import {createUserWithEmailAndPassword, Unsubscribe, onAuthStateChanged} from 'firebase/auth'

const getInitialState = () => {
    return {
        user: "",
        password: "",
        unsuscribeAuth: null as null | Unsubscribe,
    }
}

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
        return getInitialState();
    },
    methods: {
        onSubmit() {
            createUserWithEmailAndPassword(auth, this.user, this.password)
                .then(() => {
                    this.$router.push('/home')
                })
                .catch(error => {
                    alert(error.message)
                })
        }
    },
    ionViewDidEnter() {
        this.unsuscribeAuth = onAuthStateChanged(auth, (user) => {
            if (user) {
                this.$router.push('/home');
            }
        })
    },
    ionViewWillLeave() {
        if (this.unsuscribeAuth) {
            this.unsuscribeAuth();
        }
        Object.assign(this.$data, getInitialState());
    }
});

</script>

<style scoped>
:root {
    --white: #FFFFFF;
    --black: #000000;
    --text-input-field: #F7F7F7;
    --green: rgb(134, 152, 44);
    --sm: 14px;
    --md: 16px;
    --lg: 18px;
}

template {
    margin: 0;
    font-family: 'Quicksand', sans-serif;
}

.login {
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
}

.form-container {
    display: grid;
    grid-template-rows: auto 1fr auto;
    width: 300px;
}

.logo {
    width: 150px;
    margin-bottom: 48px;
    justify-self: center;
    display: none;
}

.form {
    display: flex;
    flex-direction: column;
}

.form a {
    color: var(--green);
    font-size: var(--sm);
    text-align: center;
    text-decoration: none;
    margin-bottom: 52px;
}

.ion-label {
    font-size: var(--sm);
    font-weight: bold;
    margin-bottom: 4px;
}

.ion-input {
    background-color: var(--text-input-field);
    border: none;
    border-radius: 8px;
    height: 30px;
    font-size: var(--md);
    padding: 6px;
    margin-bottom: 12px;
}

.ion-input-email {
    margin-bottom: 22px;
}

.primary-ion-button {
    background: var(--green);
    border-radius: 8px;
    border: none;
    color: var(--white);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
}

.line {
    border-bottom: 1px solid grey;
    margin-bottom: 16px;
}

ion-button {
    --border-radius: 8px;
}

.secondary-ion-button {
    background: var(--white);
    border-radius: 8px;
    border-style: 1px solid;
    border-color: var(--green);
    color: var(--green);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
}

.login-ion-button {
    margin-top: 14px;
    margin-bottom: 30px;
}

@media (max-width: 600px) {
    .logo {
        display: block;
    }

    .secondary-ion-button {
        position: absolute;
        bottom: 20px;
        width: inherit;
    }
}
</style>