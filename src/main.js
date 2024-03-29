import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
    theme: {
    defaultTheme: 'light' //light, dark
  }
})

const app = createApp(App)

app.use(vuetify)
app.use(createPinia())
app.mount('#app')
