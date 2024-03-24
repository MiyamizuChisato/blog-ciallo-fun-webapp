import type {Element} from "cheerio";

export interface ArchiveTitle {
    element: Element | null
    children: Element[]
}