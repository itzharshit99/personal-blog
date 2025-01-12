import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import ContactUs from "../pages/ContactUs.jsx";
import PrivacyPolicy from "../pages/PrivacyPolicy.jsx";

const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/about-us",
        element:<About/>
      },
      {
        path:"/contact",
        element:<ContactUs/>
      },
      {
        path:"/privacy-policy",
        element:<PrivacyPolicy/>
      }
    ]
  }
]);
export default router;