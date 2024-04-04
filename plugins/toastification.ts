import "vue-toastification/dist/index.css";
import Toast, {POSITION} from "vue-toastification";

export default defineNuxtPlugin((app) => {
    app.vueApp.use(Toast, {
        position: POSITION.BOTTOM_RIGHT
    })
})