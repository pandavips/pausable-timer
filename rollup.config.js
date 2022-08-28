import rollupTypescript from "@rollup/plugin-typescript";
const { terser } = require("rollup-plugin-terser");
import dts from "rollup-plugin-dts";
// rollup.config.js
export default [
  {
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
  },
  {
    // 生成 .d.ts 类型声明文件
    input: "src/index.ts",
    output: {
      file: "./dist/index.d.ts",
      format: "es",
    },
    plugins: [dts()],
  },
];
