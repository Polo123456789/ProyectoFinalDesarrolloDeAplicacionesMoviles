<template>
  <ion-page>
    <ion-content :fullscreen="true" class="app-container">
      <ion-header class="app-header">
        <div class="app-header-left">
          <span class="app-icon">
            <ion-img src="public/assets/icon/icon.png"></ion-img>
          </span>
          <p class="app-name">Car360</p>
        </div>
        <div class="app-header-right">
          <ion-button class="mode-switch" title="Switch Theme">
            <svg class="moon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" width="24" height="24" viewBox="0 0 24 24">
              <defs></defs>
              <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
            </svg>
          </ion-button>
          <ion-button class="profile-btn">
            <span>Bienvenido, User</span>
          </ion-button>
        </div>
      </ion-header>

      <div class="app-content">
        <button @click="signOut">Cerrar Sesion</button>
          <div class="app-sidebar">
            <a href="" class="app-sidebar-link active">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" /></svg>
            </a>
            <a href="" class="app-sidebar-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" /></svg>
            </a>
          </div>
          <div class="projects-section">
            <div class="projects-section-header">
              <p>Viajes</p>
            </div>
            <div class="projects-section-line">
              <div class="projects-status">
                <div class="item-status">
                  <span class="status-type">Historial</span>
                </div>
                
              </div>
              <div class="view-actions">
                <ion-button class="view-btn list-view" title="List View">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-list">
                    <line x1="8" y1="6" x2="21" y2="6" />
                    <line x1="8" y1="12" x2="21" y2="12" />
                    <line x1="8" y1="18" x2="21" y2="18" />
                    <line x1="3" y1="6" x2="3.01" y2="6" />
                    <line x1="3" y1="12" x2="3.01" y2="12" />
                    <line x1="3" y1="18" x2="3.01" y2="18" /></svg>
                </ion-button>
                <ion-button class="view-btn grid-view active" title="Grid View">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-grid">
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" /></svg>
                </ion-button>
              </div>
            </div>
            <div class="project-boxes jsGridView">
              <div class="project-box-wrapper">
                <div class="project-box" style="background-color: #c8f7dc;">
                  <div class="project-box-header">
                    <ion-img src="public/assets/Honda-HR-V-PNG-Photos.png" style="width: 200px; height:110px;"></ion-img>
              </div>
              <div class="project-box-content-header">
                <span>December 12, 2022</span>
                <p class="box-content-header">P022REW</p>
                <p class="box-content-subheader">Honda HRV</p>
              </div>
            </div>
          </div>


          <div class="project-box-wrapper">
            <div class="project-box" style="background-color: #c8f7dc;">
              <div class="project-box-header">
                <img src="public/assets/kia_PNG81.png" style="width: 200px; height:110px;">
              </div>
              <div class="project-box-content-header">
                <span>December 12, 2022</span>
                <p class="box-content-header">P0721JNJ</p>
                <p class="box-content-subheader">Kia Picanto</p>
              </div>
            </div>
          </div>

          <div class="project-box-wrapper">
            <div class="project-box" style="background-color: #c8f7dc;">
              <div class="project-box-header">
                <img src="public/assets/creta.png" style="width: 200px; height:110px;">
              </div>
              <div class="project-box-content-header">
                <span>December 12, 2022</span>
                <p class="box-content-header">P23JWH</p>
                <p class="box-content-subheader">Hyunday Creta</p>
              </div>
            </div>
          </div>


          <div class="project-box-wrapper">
            <div class="project-box" style="background-color: #c8f7dc;">
              <div class="project-box-header">
                <ion-img src="public/assets/Rav4.png" style="width: 200px; height:110px;"></ion-img>
              </div>
              <div class="project-box-content-header">
                <span>December 12, 2022</span>
                <p class="box-content-header">P216NDI</p>
                <p class="box-content-subheader">Toyota Rav4</p>
              </div>
          </div>
          </div>


          <div class="project-box-wrapper">
            <div class="project-box" style="background-color: #c8f7dc;">
              <div class="project-box-header">
                <ion-img src="public/assets/Lexus_Es.png" style="width: 200px; height:110px;"></ion-img>
              </div>
              <div class="project-box-content-header">
                <span>December 12, 2022</span>
                <p class="box-content-header">P895MIC</p>
                <p class="box-content-subheader">Lexus ES</p>
              </div>
            </div>
          </div>

          <div class="project-box-wrapper">
            <div class="project-box" style="background-color: #c8f7dc;">
              <div class="project-box-header">
                <ion-img src="public/assets/Toyota_fortuner-car-colours.png" style="width: 200px; height:110px;"></ion-img>
              </div>
              <div class="project-box-content-header">
                <span>December 12, 2022</span>
                <p class="box-content-header">P046MPM</p>
                <p class="box-content-subheader">Toyota Fortuner</p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>   
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonContent, IonHeader, IonPage,IonButton, } from '@ionic/vue';
import { defineComponent } from 'vue';
import {auth} from '@/firebase'
import {signOut} from 'firebase/auth'

export default defineComponent({
  name: 'HomePage',
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonButton,
  },
  methods: {
    signOut() {
      signOut(auth)
    }
  }
});
</script>

<style scoped>
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

:root {
    --white: #FFFFFF;
    --black: #000000;
    --text-input-field: #F7F7F7;
    --green: rgb(134, 152,44);
    --sm: 14px;
    --md: 16px;
    --lg: 18px;
  }
  body {
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
  .label {
    font-size: var(--sm);
    font-weight: bold;
    margin-bottom: 4px;
  }
  .input {
    background-color: var(--text-input-field);
    border: none;
    border-radius: 8px;
    height: 30px;
    font-size: var(--md);
    padding: 6px;
    margin-bottom: 12px;
  }
  .input-email {
    margin-bottom: 22px;
  }
  .primary-button {
    background-color: var(--green);
    border-radius: 8px;
    border: none;
    color: var(--white);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
  }
  
  .line{
    border-bottom: 1px solid grey;
    margin-bottom:16px;
  }
  
  .secondary-button {
    background-color: var(--white);
    border-radius: 8px;
    border: 1px solid var(--green);
    color: var(--green);
    width: 100%;
    cursor: pointer;
    font-size: var(--md);
    font-weight: bold;
    height: 50px;
  }
  .login-button {
    margin-top: 14px;
    margin-bottom: 30px;
  }
  @media (max-width: 600px) {
    .logo {
      display: block;
    }
    .secondary-button {
      position: absolute;
      bottom: 20px;
      width: inherit;
    }
  }
  
  
  :root {
    --app-container: #f3f6fd;
    --main-color: #1f1c2e;
    --secondary-color: #4A4A4A;
    --link-color: #1f1c2e;
    --link-color-hover: #1f1c2e;
    --link-color-active: #fff;
    --link-color-active-bg: #1f1c2e;
    --projects-section: #fff;
    --message-box-hover: #fafcff;
    --message-box-border: #e9ebf0;
    --more-list-bg: #fff;
    --more-list-bg-hover: #f6fbff;
    --more-list-shadow: rgba(209, 209, 209, 0.4);
    --button-bg: #1f1c24;
    --search-area-bg: #fff;
    --star: #1ff1c2e;
    --message-btn: #fff;
  }
  
  .dark:root {
    --app-container: #1f1d2b;
    --app-container: #111827;
    --main-color: #fff;
    --secondary-color: rgba(255,255,255,.8);
    --projects-section: #1f2937;
    --link-color: rgba(255,255,255,.8);
    --link-color-hover: rgba(195, 207, 244, 0.1);
    --link-color-active-bg: rgba(195, 207, 244, 0.2);
    --button-bg: #1f2937;
    --search-area-bg: #1f2937;
    --message-box-hover: #243244;
    --message-box-border: rgba(255,255,255,.1);
    --star: #ffd92c;
    --light-font: rgba(255,255,255,.8);
    --more-list-bg: #2f3142;
    --more-list-bg-hover: rgba(195, 207, 244, 0.1);
    --more-list-shadow: rgba(195, 207, 244, 0.1);
    --message-btn: rgba(195, 207, 244, 0.1);
  }
  
  html, body {
    width: 100%;
    height: 100vh;
    margin: 0;
  }
  
  body {
    font-family: "DM Sans", sans-serif;
    overflow: hidden;
    display: flex;
    justify-content: center;
    background-color: var(--app-container);
  }
  
  button, a {
    cursor: pointer;
  }
  
  .app-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: var(--app-container);
    transition: 0.2s;
    max-width: 1800px;
  }
  .app-container button, .app-container input, .app-container optgroup, .app-container select, .app-container textarea {
    font-family: "DM Sans", sans-serif;
  }
  .app-content {
    display: flex;
    height: 100%;
    overflow: hidden;
    padding: 16px 24px 24px 0;
  }
  .app-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 16px 24px;
    position: relative;
  }
  .app-header-left, .app-header-right {
    display: flex;
    align-items: center;
  }
  .app-header-left {
    flex-grow: 1;
  }
  .app-header-right button {
    margin-left: 10px;
  }
  .app-icon {
    width: 60px;
    height: 32px;
    border-radius: 4px;
    position: relative;
  }
  
  .app-name {
    color: var(--main-color);
    margin: 0;
    font-size: 20px;
    line-height: 24px;
    font-weight: 700;
    margin: 0 32px;
  }
  
  .mode-switch {
    background-color: transparent;
    border: none;
    padding: 0;
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  
  .profile-btn {
    padding: 0;
    border: 0;
    background-color: transparent;
    display: flex;
    align-items: center;
    padding-left: 12px;
    border-left: 2px solid #ddd;
  }
  .profile-btn img {
    width: 32px;
    height: 32px;
    -o-object-fit: cover;
       object-fit: cover;
    border-radius: 50%;
    margin-right: 4px;
  }
  .profile-btn span {
    color: var(--main-color);
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
  }
  
  .page-content {
    flex: 1;
    width: 100%;
  }
  
  .app-sidebar {
    padding: 40px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .app-sidebar-link {
    color: var(--main-color);
    color: var(--link-color);
    margin: 16px 0;
    transition: 0.2s;
    border-radius: 50%;
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .app-sidebar-link:hover {
    background-color: var(--link-color-hover);
    color: var(--link-color-active);
  }
  .app-sidebar-link.active {
    background-color: var(--link-color-active-bg);
    color: var(--link-color-active);
  }
  
  .projects-section {
    flex: 2;
    background-color: var(--projects-section);
    border-radius: 32px;
    padding: 32px 32px 0 32px;
    overflow: hidden;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .projects-section-line {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 32px;
  }
  .projects-section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
    color: var(--main-color);
  }
  .projects-section-header p {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    opacity: 0.9;
    margin: 0;
    color: var(--main-color);
  }
  .projects-section-header .time {
    font-size: 20px;
  }
  
  .projects-status {
    display: flex;
  }
  
  .item-status {
    display: flex;
    flex-direction: column;
    margin-right: 16px;
  }
  .item-status:not(:last-child) .status-type:after {
    content: "";
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translatey(-50%);
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 1px solid var(--secondary-color);
  }
  
  .status-number {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;
    color: var(--main-color);
  }
  
  .status-type {
    position: relative;
    padding-right: 24px;
    color: var(--secondary-color);
  }
  
  .view-actions {
    display: flex;
    align-items: center;
  }
  
  .view-btn {
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px;
    border-radius: 4px;
    background-color: transparent;
    border: none;
    color: var(--main-color);
    margin-left: 8px;
    transition: 0.2s;
  }
  .view-btn.active {
    background-color: var(--link-color-active-bg);
    color: var(--link-color-active);
  }
  .view-btn:not(.active):hover {
    background-color: var(--link-color-hover);
    color: var(--link-color-active);
  }
  
  .messages-section {
    flex-shrink: 0;
    padding-bottom: 32px;
    background-color: var(--projects-section);
    margin-left: 24px;
    flex: 1;
    width: 100%;
    border-radius: 30px;
    position: relative;
    overflow: auto;
    transition: all 300ms cubic-bezier(0.19, 1, 0.56, 1);
  }
  .messages-section .messages-close {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 3;
    border: none;
    background-color: transparent;
    color: var(--main-color);
    display: none;
  }
  .messages-section.show {
    transform: translateX(0);
    opacity: 1;
    margin-left: 0;
  }
  .messages-section .projects-section-header {
    position: sticky;
    top: 0;
    z-index: 1;
    padding: 32px 24px 0 24px;
    background-color: var(--projects-section);
  }
  
  .message-box {
    border-top: 1px solid var(--message-box-border);
    padding: 16px;
    display: flex;
    align-items: flex-start;
    width: 100%;
  }
  .message-box:hover {
    background-color: var(--message-box-hover);
    border-top-color: var(--link-color-hover);
  }
  .message-box:hover + .message-box {
    border-top-color: var(--link-color-hover);
  }
  .message-box img {
    border-radius: 50%;
    -o-object-fit: cover;
       object-fit: cover;
    width: 40px;
    height: 40px;
  }
  
  .message-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
  .message-header .name {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    color: var(--main-color);
    margin: 0;
  }
  
  .message-content {
    padding-left: 16px;
    width: 100%;
  }
  
  .star-checkbox input {
    opacity: 0;
    position: absolute;
    width: 0;
    height: 0;
  }
  .star-checkbox label {
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  .dark .star-checkbox {
    color: var(--secondary-color);
  }
  .dark .star-checkbox input:checked + label {
    color: var(--star);
  }
  .star-checkbox input:checked + label svg {
    fill: var(--star);
    transition: 0.2s;
  }
  
  .message-line {
    font-size: 14px;
    line-height: 20px;
    margin: 8px 0;
    color: var(--secondary-color);
    opacity: 0.7;
  }
  .message-line.time {
    text-align: right;
    margin-bottom: 0;
  }
  
  .project-boxes {
    margin: 0 -8px;
    overflow-y: auto;
  }
  .project-boxes.jsGridView {
    display: flex;
    flex-wrap: wrap;
  }
  .project-boxes.jsGridView .project-box-wrapper {
    width: 33.3%;
  }
  .project-boxes.jsListView .project-box {
    display: flex;
    border-radius: 10px;
    position: relative;
  }
  .project-boxes.jsListView .project-box > * {
    margin-right: 24px;
  }
  .project-boxes.jsListView .more-wrapper {
    position: absolute;
    right: 16px;
    top: 16px;
  }
  .project-boxes.jsListView .project-box-content-header {
    order: 1;
    max-width: 120px;
  }
  .project-boxes.jsListView .project-box-header {
    order: 2;
  }
  .project-boxes.jsListView .project-box-footer {
    order: 3;
    padding-top: 0;
    flex-direction: column;
    justify-content: flex-start;
  }
  .project-boxes.jsListView .project-box-footer:after {
    display: none;
  }
  .project-boxes.jsListView .participants {
    margin-bottom: 8px;
  }
  .project-boxes.jsListView .project-box-content-header p {
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .project-boxes.jsListView .project-box-header > span {
    position: absolute;
    bottom: 16px;
    left: 16px;
    font-size: 12px;
  }
  .project-boxes.jsListView .box-progress-wrapper {
    order: 3;
    flex: 1;
  }
  
  .project-box {
    --main-color-card: #dbf6fd;
    border-radius: 30px;
    padding: 16px;
    background-color: var(--main-color-card);
  }
  .project-box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
    color: var(--main-color);
  }
  .project-box-header span {
    color: #4A4A4A;
    opacity: 0.7;
    font-size: 14px;
    line-height: 16px;
  }
  .project-box-content-header {
    text-align: center;
    margin-bottom: 16px;
  }
  .project-box-content-header p {
    margin: 0;
  }
  .project-box-wrapper {
    padding: 8px;
    transition: 0.2s;
  }
  
  .project-btn-more {
    padding: 0;
    height: 14px;
    width: 24px;
    height: 24px;
    position: relative;
    background-color: transparent;
    border: none;
    flex-shrink: 0;
    /*&:after, &:before {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background-color: var(--main-color);
      opacity: .8;
      left: 50%;
      transform: translatex(-50%);
    }
  
    &:before { top: 0;}
    &:after { bottom: 0; }*/
  }
  
  .more-wrapper {
    position: relative;
  }
  
  .box-content-header {
    font-size: 16px;
    line-height: 24px;
    font-weight: 700;
    opacity: 0.7;
  }
  
  .box-content-subheader {
    font-size: 14px;
    line-height: 24px;
    opacity: 0.7;
  }
  
  .box-progress {
    display: block;
    height: 4px;
    border-radius: 6px;
  }
  .box-progress-bar {
    width: 100%;
    height: 4px;
    border-radius: 6px;
    overflow: hidden;
    background-color: #fff;
    margin: 8px 0;
  }
  .box-progress-header {
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    margin: 0;
  }
  .box-progress-percentage {
    text-align: right;
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
  }
  
  .project-box-footer {
    display: flex;
    justify-content: space-between;
    padding-top: 16px;
    position: relative;
  }
  .project-box-footer:after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.6);
    width: calc(100% + 32px);
    top: 0;
    left: -16px;
    height: 1px;
  }
  
  .participants {
    display: flex;
    align-items: center;
  }
  .participants img {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    overflow: hidden;
    -o-object-fit: cover;
       object-fit: cover;
  }
  .participants img:not(:first-child) {
    margin-left: -8px;
  }
  
  .add-participant {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    background-color: rgba(255, 255, 255, 0.6);
    margin-left: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
  
  .days-left {
    background-color: rgba(255, 255, 255, 0.6);
    font-size: 12px;
    border-radius: 20px;
    flex-shrink: 0;
    padding: 6px 16px;
    font-weight: 700;
  }
  
  .mode-switch.active .moon {
    fill: var(--main-color);
  }
  
  .messages-btn {
    border-radius: 4px 0 0 4px;
    position: absolute;
    right: 0;
    top: 58px;
    background-color: var(--message-btn);
    border: none;
    color: var(--main-color);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    display: none;
  }
  
  @media screen and (max-width: 980px) {
    .project-boxes.jsGridView .project-box-wrapper {
      width: 50%;
    }
  
    .status-number, .status-type {
      font-size: 14px;
    }
  
    .status-type:after {
      width: 4px;
      height: 4px;
    }
  
    .item-status {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 880px) {
    .messages-section {
      transform: translateX(100%);
      position: absolute;
      opacity: 0;
      top: 0;
      z-index: 2;
      height: 100%;
      width: 100%;
    }
    .messages-section .messages-close {
      display: block;
    }
  
    .messages-btn {
      display: flex;
    }
  }
  @media screen and (max-width: 720px) {
    .app-name, .profile-btn span {
      display: none;
    }
  
    .add-btn, .notification-btn, .mode-switch {
      width: 20px;
      height: 20px;
    }
    .add-btn svg, .notification-btn svg, .mode-switch svg {
      width: 16px;
      height: 16px;
    }
  
    .app-header-right button {
      margin-left: 4px;
    }
  }
  @media screen and (max-width: 520px) {
    .projects-section {
      overflow: auto;
    }
  
    .project-boxes {
      overflow-y: visible;
    }
  
    .app-sidebar, .app-icon {
      display: none;
    }
  
    .app-content {
      padding: 16px 12px 24px 12px;
    }
  
    .status-number, .status-type {
      font-size: 10px;
    }
  
    .view-btn {
      width: 24px;
      height: 24px;
    }
  
    .app-header {
      padding: 16px 10px;
    }
  
    .search-input {
      max-width: 120px;
    }
  
    .project-boxes.jsGridView .project-box-wrapper {
      width: 100%;
    }
  
    .projects-section {
      padding: 24px 16px 0 16px;
    }
  
    .profile-btn img {
      width: 24px;
      height: 24px;
    }
  
    .app-header {
      padding: 10px;
    }
  
    .projects-section-header p,
  .projects-section-header .time {
      font-size: 18px;
    }
  
    .status-type {
      padding-right: 4px;
    }
    .status-type:after {
      display: none;
    }
  
    .search-input {
      font-size: 14px;
    }
  
    .messages-btn {
      top: 48px;
    }
  
    .box-content-header {
      font-size: 12px;
      line-height: 16px;
    }
  
    .box-content-subheader {
      font-size: 12px;
      line-height: 16px;
    }
  
    .project-boxes.jsListView .project-box-header > span {
      font-size: 10px;
    }
  
    .box-progress-header {
      font-size: 12px;
    }
  
    .box-progress-percentage {
      font-size: 10px;
    }
  
    .days-left {
      font-size: 8px;
      padding: 6px 6px;
      text-align: center;
    }
  
    .project-boxes.jsListView .project-box > * {
      margin-right: 10px;
    }
  
    .project-boxes.jsListView .more-wrapper {
      right: 2px;
      top: 10px;
    }
  }
</style>
