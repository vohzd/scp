<template>
  <section>
    <nuxt class="mtx" />
  </section>
</template>


<script>

import { mapActions, mapGetters } from "vuex";

export default {

};
</script>

<style lang="css">

:root {
    --text: white;
    --link: #be7a0b;
    --button: #753751;
    --background: #232529;
  }

html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}

@font-face {
  font-family: "Inconsolata";
  src: url("~static/fonts/inconsolata.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "nova";
  src: url("~static/fonts/nova.ttf");
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: "share-tech";
  src: url("~static/fonts/share-tech.ttf");
  font-weight: normal;
  font-style: normal;
}

body {
  background: var(--background);
  font-size: 24px;
  color: var(--text);
  font-family: "Inconsolata", monospace;
  margin: 0;
}

pre {
  font-family: "Inconsolata", monospace;
  line-height: 110%;
  margin: 0px;
  white-space: pre-wrap;
}

a {
  letter-spacing: 3px;
  text-decoration: none;
  color: var(--link);
}

a:focus {
    outline:0;
}

a:active,
a:hover {
    outline: 0;
    opacity: 0.7;
}

h1 {
  font-size: 52px;
  border-bottom: 3px solid rgba(255,255,255,0.1);
  padding-bottom: 16px;
}

h2 {
  font-size: 22px;
}


button {
  padding: 24px;
  outline: none;
  border-radius: 3px;
  border: 0px;
  background: var(--button);
  color: white;
  font-family: "Inconsolata", monospace;
  transition: 0.4s all;
}


input, textarea {
  padding: 24px;
  width: 100%;
  border-radius: 3px;
  outline: none;
  border: 0px;
  background: rgba(255, 255, 255, 0.05);
  color: white;
  font-family: "Inconsolata", monospace;
  transition: 0.4s all;
}


input:focus, textarea:focus {
  background: rgba(255, 255, 255, 0.12);
}

textarea {
  resize: vertical;
}

button[disabled] {
  background: rgba(164, 55, 116, 0.04);
}

button:hover:not(:disabled) {
  transform: scale(1.15);
  cursor: pointer;
  box-shadow: inset 0 0 8px 32px rgba(0, 0, 0, 0.05);

}

button::-moz-focus-inner {
  border: 0;
}

.relative {
  position: relative;
}

.center-container {
  margin: auto;
  width: 50%;
}

.mt {
  margin-top: 16px;
}

.mb {
  margin-bottom: 16px;
}

.ml {
  margin-left: 16px;
}

.mr {
  margin-right: 16px;
}

.mtx {
  margin-top: 128px;
}

.mbx {
  margin-bottom: 128px;
}

.mlx {
  margin-left: 32px;
}

.mrx {
  margin-right: 32px;
}

.pad {
  padding: 32px;
  display: inline-block;
}

.row {
  width: 100%;
  display: inline-block;
}

footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}

.center {
  text-align: center;
}

.grid {
  display: grid;
}


.two-uneven-grid {
  grid-template-columns: 1fr 2fr;
}

.three-uneven-grid {
  grid-template-columns: 1fr 1fr 6fr;
}

.even-grid {
  grid-template-columns: 1fr 1fr;
}

.c10 {
  float: left;
  width: 10%;
}

.c15 {
  float: left;
  width: 10%;
}

.c20 {
  float: left;
  width: 20%;
}

.c25 {
  float: left;
  width: 25%;
}

.c33 {
  float: left;
  width: 33%;
}

.c30 {
  float: left;
  width: 30%;
}

.c40 {
  float: left;
  width: 40%;
}

.c48 {
  float: left;
  width: 48%;
}

.c50 {
  float: left;
  width: 50%;
}

.c60 {
  float: left;
  width: 60%;
}

.c75 {
  float: left;
  width: 75%;
}

.c90 {
  float: left;
  width: 75%;
}

.absolute-top-right {
  position: absolute;
  top: 0;
  right: 0;
}

.nuxt-link-exact-active {
  opacity: 0.33;
}

.scroll {
  overflow-y: scroll;
  overflow-x: hidden;
}

.massive {
  font-size: 28px;
}

.medium {
  font-size: 12px;
}

.tiny {
  font-size: 10px;
}

.tags {
  display: inline-block;
}

.tag {
  padding: 6px;
  float: left;
  margin-right: 6px;
  margin-bottom: 6px;
  font-size: 10px;
  line-height: 16px;
  background: rgba(255,255,255,0.1);
}

.min-height {
    min-height: 400px;
}

.flex-wrapper {
  display: flex;
}

.flex-column {
  flex-direction: column;
}

.flex-item {
  flex: 1;
}

.text-center {
  text-align: center;
}

.radio-buttons {
  border-radius: 4px;
  border: 1px solid rgba(0,0,0,0.15);
  background: rgba(0,0,0,0.05);
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
}

.radio-button {
  flex-grow: 1;
  background: rgba(0,0,0,0.05);
  border: none;
  padding: 0px;
  border-radius: 0px;
  box-shadow: none;
  border-right: 1px solid rgba(0,0,0,0.05);
  padding: 16px;
}

.radio-button:last-child {
  border-right:none;
}

.radio-button label {
  width: auto;
  padding: 12px;
  text-align: center;
  color: white;
}

.radio-button:not(.radio-button-selected):hover {
  cursor: pointer;
  background: rgba(0,0,0,0.1);
}

.radio-button input[type="radio"]{
  display: none;
}

.radio-button-selected {
  background: var(--button);
}


.lds-ellipsis div {
    position: absolute;
    top: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: rgba(0,0,0,0.15);
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
}
.lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
}
.lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
}
.lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
}
@keyframes lds-ellipsis1 {
    0% {
        transform: scale(0);
   }
    100% {
        transform: scale(1);
   }
}
@keyframes lds-ellipsis3 {
    0% {
        transform: scale(1);
   }
    100% {
        transform: scale(0);
   }
}
@keyframes lds-ellipsis2 {
    0% {
        transform: translate(0, 0);
   }
    100% {
        transform: translate(19px, 0);
   }
}

.main-logo {
  font-family: "nova";
  font-size: 256px;
  text-align: center;
}


@media (max-width: 1600px) {
  .center-container {
    width: 80%;
  }

  .main-logo {
    font-size: 196px;
  }

}

@media (max-width: 1000px) {
  .center-container {
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;
  }

  .main-logo {
    font-size: 128px;
  }
}
</style>
