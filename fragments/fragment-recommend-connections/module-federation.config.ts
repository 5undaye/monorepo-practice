export const mfConfig = {
  name: "fragment_recommend_connections",
  filename: "remoteEntry.js",
  exposes: { "./container": "./src/containers/recommend-connections-container.tsx" },
  shared: ["react", "react-dom"],
};
