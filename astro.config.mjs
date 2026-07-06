import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://danielfer31.github.io",
  base: "/frato-web",
  vite: {
    plugins: [tailwindcss()],
  },
});
