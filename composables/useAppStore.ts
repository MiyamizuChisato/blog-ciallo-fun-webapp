export const useAppStore = defineStore('app', () => {
    const loading = ref(true)
    function setLoading(flag:boolean){
        loading.value = flag
    }
    return {
        loading,
        setLoading
    }
})