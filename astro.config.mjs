import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://phlebotomistjobs.org",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  compressHTML: true,
});
