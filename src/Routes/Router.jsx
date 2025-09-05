// src/Routes/Router.jsx
import { createBrowserRouter } from "react-router";
import Root from "../LayOuts/Root";
import Home from "../Components/Home";
import Register from "../Components/Register";
import Login from "../Components/Login";
import ErrorPage from "../Components/ErrorPage";

import DashboardLayout from "../LayOuts/DashboardLayout";
import DashboardHome from "../Components/DashboardHome";
import MyPosts from "../Components/MyPosts";
import AddPost from "../Components/AddPost";
import EditPost from "../Components/EditPost";
import PostDetails from "../Components/PostDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, element: <Home /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
    ],
  },
  {
    path: "/dashboard",
    Component: DashboardLayout,
    children: [
      { index: true, element: <DashboardHome /> },
      { path: "my-posts", element: <MyPosts /> },
      { path: "new-post", element: <AddPost /> },
      { path: "edit/:id", element: <EditPost /> },
      { path: "post/:id", element: <PostDetails /> },
    ],
  },
  { path: "/*", element: <ErrorPage /> },
]);

export default router;