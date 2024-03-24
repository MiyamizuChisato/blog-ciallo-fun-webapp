import { sleep } from "~/composables/time";

export default defineEventHandler(async () => {
    await sleep(200)
    return 5;
})