import Vue from 'vue'
import { Meteor } from 'meteor/meteor'

import VueTracker from 'vue-meteor-tracker'
import store from './../imports/client/store'
import router from './../imports/client/router'
import App from './../imports/client/App.vue'


Vue.use(VueTracker)

Meteor.startup(() => {
  new Vue({
    router,
    store,
    render: h => h(App),
  }).$mount('app')
})
