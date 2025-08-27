import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout/RootLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Awards from "./pages/Awards/Awards";
import Contact from "./pages/Contact/Contact";
import Events from "./pages/Events/Events";
import Team from "./pages/Team/Team";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "awards", element: <Awards /> },
      { path: "contact", element: <Contact /> },
      { path: "events", element: <Events /> },
      { path: "team", element: <Team /> },
    ],
  },
]);
export default router;
