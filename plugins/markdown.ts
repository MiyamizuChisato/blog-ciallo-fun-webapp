import 'github-markdown-css'
import MarkdownIt from "markdown-it";
import Shiki from "@shikijs/markdown-it";
import {load} from "cheerio";

const markdownIt = new MarkdownIt()

async function getShikiPlugin() {
    return await Shiki({
        themes: {
            light: 'vitesse-light',
            dark: 'vitesse-dark',
        }
    });
}

getShikiPlugin().then(plugin => {
    markdownIt.use(plugin);
});

function parseMarkdown(text: string) {
    const html = `${markdownIt.render(text)}`
    const $ = load(html)
    $('body').children().each((index, element) => {
        $(element).attr('data-aos', 'fade-up')
    })
    return $.html()
}

export default defineNuxtPlugin(() => {
    return {
        provide: {
            parseMarkdown: () => parseMarkdown
        }
    }
})