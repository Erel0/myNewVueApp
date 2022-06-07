require('./bootstrap');

import Alpine from 'alpinejs';

window.Alpine = Alpine;

Alpine.start();


///// VUE /////

import { createApp } from "vue"
import router from "./router"

if (document.getElementById("app")) {
    createApp({
        components: {}
    })
        .use(router)
        .mount("#app")
}
