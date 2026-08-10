import { readFileSync } from "node:fs";

const h = readFileSync("dist/index.html", "utf8");
console.log("Apply text nodes:", (h.match(/>\s*Apply\s*</g) || []).length);
console.log("apply links with rel:", (h.match(/job-apply" href="[^"]+" target="_blank" rel="noopener nofollow"/g) || []).length);
const jobcard = h.match(/class="job-title"/g)?.length ?? 0;
const titleLinks = h.match(/job-apply"/g)?.length ?? 0;
console.log("apply buttons:", titleLinks);
console.log("job cards:", jobcard);
