import { UrlObject } from "url";

export const getUrlObjectLink = (link: string): UrlObject => link as unknown as UrlObject;