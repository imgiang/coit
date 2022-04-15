import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./assets/tailwind.css";

//import bootstrap 4
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//import fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// firebase
// import firebase from "firebase/app";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

library.add(faSpinner);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// firebase.initializeApp({
//   apiKey: "AIzaSyAy094WT_V6fRjfBbUI1j520U7JCvRBfgU",
//   authDomain: "fir-firebase-562a6.firebaseapp.com",
//   databaseURL:
//     "https://fir-firebase-562a6-default-rtdb.asia-southeast1.firebasedatabase.app",
//   projectId: "fir-firebase-562a6",
//   storageBucket: "fir-firebase-562a6.appspot.com",
//   messagingSenderId: "730620184377",
//   appId: "1:730620184377:web:340fdb1cd8a92cff360ae8",
//   measurementId: "G-XKD5DG5P7X",
// });

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  },
}).$mount("#app");

// new Vue({
//   router,
//   render: (h) => h(App),
// }).$mount("#app");
