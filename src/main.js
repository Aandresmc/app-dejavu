import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import 'material-icons/iconfont/material-icons.css'; // material icons

import '@/assets/static/style.css'; // css Slider style

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Vuetify styles
Vue.use(Vuetify)

import Vuesax from 'vuesax'
import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax)

import Ionic from '@ionic/vue';
import '@ionic/core/css/ionic.bundle.css'; // Ionic styles
Vue.use(Ionic);

Vue.config.productionTip = false


Vue.use(Vuesax, {
  theme: {
    colors: {
      primary: '#5b3cc4',
      success: 'rgb(23, 201, 100)',
      danger: 'rgb(242, 19, 93)',
      warning: 'rgb(255, 130, 0)',
      dark: 'rgb(36, 33, 69)'
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
