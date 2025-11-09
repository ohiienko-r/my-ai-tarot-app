import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { init } from "./init.ts";
import App from "./App.tsx";
import "./index.css";

const root = createRoot(document.getElementById("root")!);

await init().then(() => {
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
