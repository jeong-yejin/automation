import { createBrowserRouter } from "react-router";
import Layout from "./components/Layout";
import Dashboard from "./pages/Dashboard";
import Posts from "./pages/Posts";
import Automation from "./pages/Automation";
import NotionSync from "./pages/NotionSync";
import Logs from "./pages/Logs";
import Settings from "./pages/Settings";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Dashboard },
      { path: "posts", Component: Posts },
      { path: "automation", Component: Automation },
      { path: "notion-sync", Component: NotionSync },
      { path: "logs", Component: Logs },
      { path: "settings", Component: Settings },
    ],
  },
]);
