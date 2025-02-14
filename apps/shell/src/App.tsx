import ReactDOM from "react-dom/client";

import "./index.css";
import { Button, Input } from "@career-up/ui-kit";
import { test } from "@career-up/shell-router";

test();

const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Button>Hi</Button>
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit">Subscribe</Button>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(<App />);
