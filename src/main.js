import Vue from "vue";
import App from "./App.vue";

import router from "./router/index.js";
import scrollReveal from "vue-scroll-reveal";

Vue.use(scrollReveal , {

  
  duration:800,
  scale:1,
  distance:'50px'
});
Vue.use(router);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
