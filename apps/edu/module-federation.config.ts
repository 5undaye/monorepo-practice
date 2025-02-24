export const mfConfig = {
  name: "edu",
  filename: "remoteEntry.js",
  exposes: { "./injector": "./src/injector.tsx" },
  shared: ["react", "react-dom"],
};
