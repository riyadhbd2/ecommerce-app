import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ShopContextProivider from "./context/ShopContext.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ShopContextProivider>
      <App />
    </ShopContextProivider>
  </BrowserRouter>
);
