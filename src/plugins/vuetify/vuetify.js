import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { loadFonts } from './webfontloader'

loadFonts()

export default createVuetify({
    components,
    directives,
})

