import Home from "./Views/Pages/home/Home";
import * as React from "react";
import { useRoutes } from "react-router-dom";
import Inspiration from "./Views/Pages/Inspiration/Inspiration";
import Pricing from "./Views/Pages/Pricing/Pricing";
import OnlineSore from "./Views/Pages/Pricing/OnlineSore";
import Website from "./Views/Pages/Pricing/Website";
import Blog from "./Views/Pages/Blog/Blog";
import Features from "./Views/Pages/Features/Features";
import HelpCenter from "./Views/Pages/Help/HelpCenter";
import Contact from "./Views/Pages/Help/Contact";
import Login from "./Views/Auth/Login";
import SignUp from "./Views/Auth/SignUp";
import Email from "./Views/Auth/SignUp/Email";
import WebsiteTips from "./Views/Pages/Blog/WebsiteTips";
import BusinessTips from "./Views/Pages/Blog/BusinessTips";
import News from "./Views/Pages/Blog/News";
import InspirationTips from "./Views/Pages/Blog/InspirationTips";

export function Routes() {
  let element = useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          children: [
            {
              index: true,
              element: <SignUp />,
            },
            {
              path: "email",
              element: <Email />,
            },
          ],
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
        {
          path: "websiteTips",
          element: <WebsiteTips />,
        },
        {
          path: "businessTips",
          element: <BusinessTips />,
        },
        {
          path: "inspirations",
          element: <InspirationTips />,
        },
        {
          path: "news",
          element: <News />,
        }
      ],
    },
    {
      path: "/features",
      children: [
        {
          index: true,
          element: <Features />,
        },
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
          element: <Contact />,
        },
      ],
    },
  ]);

  return element;
}
