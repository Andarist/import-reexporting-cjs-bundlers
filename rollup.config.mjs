import commonjs from "@rollup/plugin-commonjs";
import nodeResolve from "@rollup/plugin-node-resolve";

export default {
  input: "src/index.js",
  output: {
    file: "dist/rolluped.js",
    format: "iife",
  },
  plugins: [
    commonjs({
      defaultIsModuleExports: true,
    }),
    nodeResolve(),
  ],
};
