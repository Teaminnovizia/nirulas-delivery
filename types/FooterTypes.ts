import { UrlObject } from "url"

export interface LinkColProps {
    title: string
    links: {
        slug: UrlObject,
        title: string
    }[]
}