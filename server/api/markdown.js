export default defineEventHandler(async (event) => {
    const url = getQuery(event).url.toString();
    const resp = await fetch(url);
    return await resp.text();
});
