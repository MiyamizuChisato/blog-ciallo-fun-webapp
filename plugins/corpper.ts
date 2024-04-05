import VueCropper from 'vue-cropper';
import 'vue-cropper/dist/index.css'

export default defineNuxtPlugin((app) => {
    app.vueApp.use(VueCropper)
})