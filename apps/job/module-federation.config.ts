export const mfConfig = {
  name: "job",
  filename: "remoteEntry.js",
  exposes: {
    "./injector": "./src/injector.tsx",
    "./fragment-recommend-jobs": "./src/fragments/recommend-jobs-container.tsx",
  },
  shared: ["react", "react-dom"],
};
