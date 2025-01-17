const path = require("path");

module.exports = {
  entry: "./app/index.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
    libraryTarget: "commonjs",
    clean: true,
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  externals: {
    react: "react",
    "react-dom": "react-dom",
    "styled-components": {
      commonjs: "styled-components",
      commonjs2: "styled-components",
      amd: "styled-components",
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "swc-loader",
            options: {
              jsc: {
                experimental: {
                  plugins: [
                    [
                      "@swc/plugin-styled-components",
                      {
                        ssr: true,
                      },
                    ],
                  ],
                },
              },
            },
          },
          {
            loader: "ts-loader",
            options: {
              compilerOptions: {
                declaration: true,
                declarationDir: "./dist",
              },
            },
          },
        ],
      },
    ],
  },
};
