export const mfConfig = {
  name: "network",
  filename: "remoteEntry.js",
  exposes: { "./injector": "./src/injector.tsx" },
  shared: ["react", "react-dom"],
};
