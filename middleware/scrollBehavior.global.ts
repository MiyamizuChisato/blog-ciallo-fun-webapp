export default defineNuxtRouteMiddleware((to) => {
    useNuxtApp().$router.options.scrollBehavior = ()=>{
        return{
            top:0,
            left:0
        }
    }
    useNuxtApp().hook("page:loading:end", async () => {
        window.scrollTo({
                top: Number(localStorage.getItem(`${to.name?.toString()}Top`))
            }
        )
    })
})