import URLParser from "../libs/urlParser";

const url = "https://google.com"
const parser = new URLParser(url);

console.log(parser.getProtocol());
console.log(parser.getURL())
console.log(parser.getPathname())