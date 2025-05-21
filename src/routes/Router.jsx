import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";


function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
	  { path: "about", element: <About /> },
	  { path: "courses", element: <Courses /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

function Router() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default Router;