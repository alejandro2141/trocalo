import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


import { BKND_CONFIG } from '../config.js'


import * as Vue from 'vue' // in Vue 3
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

app.use(createPinia())


app.use(router)


//************************************************* */
//************AXIOS INTERCEPTOR FOR RESPONSE ****** */
//************************************************* */
axios.interceptors.response.use((response) => {
    
    console.log("AXIOS RESPONSE main TS")

    return response
  }, (error) => {
    // Handle errors here
    console.log("INTERCEPTOR ERROR 401")
    console.error(error)
    //redirect to ERROR SESSION
    router.push('ErrorSession') 
    //return Promise.reject(error)
  })
//*********************************************** */
//*********************************************** */



app.mount('#app')
