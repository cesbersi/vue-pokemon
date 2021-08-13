import { createApp } from 'vue'
import vuetify from './plugins/vuetify'
import App from './App.vue'
import './css/animations.css'
import './css/styles.css'

const app = createApp(App)
app.use(vuetify)

app.mount('#app')