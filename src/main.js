import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Transpiler for older browsers
import 'core-js/stable';
// optional but required for transforming generator fns.
import 'regenerator-runtime/runtime'; 

createApp(App).use(router).mount('#app')
