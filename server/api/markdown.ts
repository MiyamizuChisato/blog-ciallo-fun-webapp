import { sleep } from "~/composables/time"

export default defineEventHandler(async (event) => {
    const url = getQuery(event).url!.toString()
    const resp = await fetch(url)
    await sleep(1200)
    return await resp.text()
})