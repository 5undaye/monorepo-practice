export const mfConfig = {
  name: "posting",
  filename: "remoteEntry.js",
  exposes: { "./injector": "./src/injector.tsx" },
  shared: ["react", "react-dom"],
};
