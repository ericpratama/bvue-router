// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'

import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'vuetify/dist/vuetify.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'


import './style/style.css'

Vue.use(Vuetify)
Vue.use(BootstrapVue)

Vue.config.productionTip = false

Vue.use(DaySpanVuetify, {
  methods: {
    getDefaultEventColor: () => '#1976d2'
  }
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

//////////////
// import Vue from 'vue'
// import Vuetify from 'vuetify'
// import DaySpanVuetify from 'dayspan-vuetify'

// import desktop1 from '@/components/desktop1.vue'

// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// import 'vuetify/dist/vuetify.css'
// import 'material-design-icons-iconfont/dist/material-design-icons.css'
// import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'

// import router from './router'
// import './style/style.css'

// Vue.use(Vuetify)
// Vue.use(BootstrapVue)

// Vue.use(DaySpanVuetify)
// Vue.config.productionTip = false
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })