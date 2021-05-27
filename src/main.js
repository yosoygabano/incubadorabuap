import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
//import { library } from '@fortawesome/fontawesome-svg-core'
//import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
//import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//import router from './router'
import store from './store'
import './assets/tailwind.css'

//library.add(faUserSecret)

createApp(App).use(store).mount('#app')


//use(router)
