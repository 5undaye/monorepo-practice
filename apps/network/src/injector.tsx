import { injectFactory } from "@career-up/shell-router";

import { routes } from "./routes";

import "./index.css";

const inject = injectFactory({ routes });

export default inject;
