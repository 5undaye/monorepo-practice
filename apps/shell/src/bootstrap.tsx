import { createRoot } from "react-dom/client";

import App from "./App";

import "@career-up/ui-kit/index.css";
import "./index.css";

createRoot(document.getElementById("app") as HTMLElement).render(<App />);
