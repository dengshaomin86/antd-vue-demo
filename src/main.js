import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import { DatePicker, Upload, Icon, Button, Menu, Tabs, Layout, Breadcrumb, Form, Input } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.use(DatePicker);
Vue.use(Upload);
Vue.use(Icon);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Tabs);
Vue.use(Layout);
Vue.use(Breadcrumb);
Vue.use(Form);
Vue.use(Input);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
