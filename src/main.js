import Vue from "vue";
import App from "./App.vue";
// 导入element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    // 总线代理 负责兄弟 父子数据沟通
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
