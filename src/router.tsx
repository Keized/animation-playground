import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LandscapeCarousel from "./landscape-carousel";
import Layout from "./components/Layout";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />
    },
    {
      path: "about",
      element: <div>About</div>,
    },
    {
        path: "landscape-carousel",
        element: <Layout><LandscapeCarousel /></Layout> ,
    },
]);