import { staticAdaptor } from "@builder.io/qwik-city/adaptors/static/vite";
import { extendConfig } from "@builder.io/qwik-city/vite";
import baseConfig from "../../vite.config";

export default extendConfig(baseConfig, () => {
  return {
    plugins: [
      staticAdaptor({
        origin: "https://sop.xcc.tw",
      }),
    ],
    esbuild: {
      legalComments: "none",
      minifySyntax: true,
      minifyWhitespace: true,
      minifyIdentifiers: true,
      platform: "browser",
    },
    build: {
      ssr: true,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 10000,
      rollupOptions: {
        input: ["@qwik-city-plan"],
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
