export const mfConfig = {
  name: "job",
  filename: "remoteEntry.js",
  exposes: { "./injector": "./src/injector.tsx" },
  shared: ["react", "react-dom"],
};
