import {getCurrentUserApi} from "~/api/user";

export const useUserStore = defineStore('app', () => {
    const currentUser = ref<any>(null)

    const isLogin = computed(() => {
        return currentUser.value != null
    })

    async function getCurrentUser() {
        const {payload} = await getCurrentUserApi()
        currentUser.value = payload
    }

    return {
        isLogin,
        currentUser,
        getCurrentUser
    }
})