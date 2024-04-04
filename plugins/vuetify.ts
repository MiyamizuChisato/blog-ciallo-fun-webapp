import 'vuetify/styles'
import {createVuetify} from 'vuetify'

const lightTheme = {
    dark: false,
    colors: {
        primary: '#2563EBFF',
        success: '#16A34AFF',
        warning: '#F97316FF',
        error: '#E11D48FF',
        greys: '#FAFAFAFF'
    },
}
const darkTheme = {
    dark: true,
    colors: {
        primary: '#2563EBFF',
        success: '#16A34AFF',
        warning: '#F97316FF',
        error: '#E11D48FF',
        greys: '#212121FF'
    },
}
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: true,
        components: {
            VRow: {}
        },
        theme: {
            defaultTheme: 'lightTheme',
            themes: {
                lightTheme,
                darkTheme
            }
        },
    })
    app.vueApp.use(vuetify)
})