import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const ecoSwapTheme = {
  dark: false,
  colors: {
    background: '#f8f9fa',
    surface: '#ffffff',
    primary: '#1b7a3e',
    'primary-darken-1': '#156532',
    secondary: '#059669',
    error: '#ef4444',
    info: '#3b82f6',
    success: '#10b981',
    warning: '#f59e0b',
  },
}

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'ecoSwapTheme',
    themes: {
      ecoSwapTheme,
    },
  },
})
