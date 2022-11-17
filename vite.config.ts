import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), tsconfigPaths()],
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    esbuild: {
      legalComments: "none",
      minifySyntax: true,
      minifyWhitespace: true,
      minifyIdentifiers: true,
      platform: "browser",
    },
    build: {
      cssCodeSplit: true,
      chunkSizeWarningLimit: 10000,
      rollupOptions: {
        output: {
          chunkFileNames: "[name]-[hash].min.js",
          preferConst: true,
          freeze: true,
          minifyInternalExports: true,
          sourcemap: false,
          strict: true,
          compact: true,
        },
      },
    },
  };
});
