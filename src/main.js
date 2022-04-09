import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { loadFonts } from './plugins/webfontloader'
import App from './App.vue'

loadFonts()

const app = createApp(App)
const vuetify = createVuetify({
    components,
    directives,
})

app.use(vuetify)
app.mount('#app')
