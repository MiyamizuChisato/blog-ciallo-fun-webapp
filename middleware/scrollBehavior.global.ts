export default defineNuxtRouteMiddleware((to) => {
    useNuxtApp().hook("page:loading:end", async () => {
        window.scrollTo({
                top: Number(localStorage.getItem(`${to.name?.toString()}Top`))
            }
        )
    })
})