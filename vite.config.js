import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        contact: resolve(__dirname, "src/contact/index.html"),
        signup: resolve(__dirname, "src/signup/index.html"),
        signup_success: resolve(__dirname, "src/signup_success/index.html"),
        pet_pages: resolve(__dirname, "src/pet_pages/index.html"),
        pet_details: resolve(__dirname, "src/pet_details/index.html"),
        pet_care: resolve(__dirname, "src/pet_care/index.html")
      },
    },
  },
});
