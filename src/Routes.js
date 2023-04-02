import Home from "./Views/Pages/home/Home";
import * as React from "react";
import { useRoutes } from "react-router-dom";
import Inspiration from "./Views/Pages/Inspiration/Inspiration";
import Pricing from "./Views/Pages/Pricing/Pricing";
import OnlineSore from "./Views/Pages/Pricing/OnlineSore";
import Website from "./Views/Pages/Pricing/Website";
import Blog from "./Views/Pages/Blog/Blog";
import Features from "./Views/Pages/Features/Features";
import FeatureWebsites from "./Views/Pages/Features/FeatureWebsites";
import HelpCenter from "./Views/Pages/Help/HelpCenter";
import Contact from "./Views/Pages/Help/Contact";

export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: "/inspiration",
      children: [
        {
          index: true,
          element: <Inspiration />,
        },
      ],
    },
    {
      path: "price",
      children: [
        {
          index: true,
          element: <Pricing />,
        },
        {
          path: "website",
          element: <Website />,
        },
        {
          path: "onlineStore",
          element: <OnlineSore />,
        },
      ],
    },
    {
      path: "/blog",
      children: [
        {
          index: true,
          element: <Blog />,
        },
      ],
    },
    {
      path: "/features",
      children: [
        {
          index: true,
          element: <Features />,
        }
        
      ],
    },
    {
      path: "/helpcenter",
      children: [
        {
          index: true,
          element: <HelpCenter />,
        },
        {
          path: "contact",
          element: <Contact />
        }
        
      ],
    },
  ]);

  return element;
}
