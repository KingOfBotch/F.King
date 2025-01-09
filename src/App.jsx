import { createBrowserRouter, RouterProvider } from "react-router-dom";

import TopBar from "./pages/TopBar";
import Register from "./pages/regis/Register.jsx";
import Login from "./pages/login/Login.jsx";
import Home from "./pages/homePage/home.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "pages",
    element: <TopBar />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "/regis",
        element: <Register />,
      },
      {
        path: "/component",
        element: <Footer />,
        children: [
          {
            path: "/homePage",
            element: <Home />,
          },
        ],
      },
    ],
  },
]);
const App = () => <RouterProvider router={router} />;
export default App;
