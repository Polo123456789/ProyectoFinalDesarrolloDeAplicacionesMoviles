<template>
  <ion-app>
    <ion-router-outlet />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import { auth } from '@/firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.$router.push('/login')
      }
    });
  }
});
</script>