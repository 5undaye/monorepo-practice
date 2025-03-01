export const mfConfig = {
  name: "shell",
  filename: "remoteEntry.js",
  remotes: {
    posting: "posting@http://localhost:3001/remoteEntry.js",
    edu: "edu@http://localhost:3002/remoteEntry.js",
    network: "network@http://localhost:3003/remoteEntry.js",
    job: "job@http://localhost:3004/remoteEntry.js",
  },
  exposes: {},
  shared: ["react", "react-dom"],
};
