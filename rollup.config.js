import rollupTypescript from "@rollup/plugin-typescript";
const { terser } = require("rollup-plugin-terser");
// rollup.config.js
export default {
  // 核心选项
  input: "src/index.ts",
  output: [
    {
      file: "dist/main.cjs.js",
      format: "cjs",
    },
    {
      file: "dist/main.esm.js",
      format: "esm",
    },
  ],
  plugins: [rollupTypescript(), terser()],
};
