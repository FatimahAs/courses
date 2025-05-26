import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Contact from "../pages/Contact";
import Career from "../pages/Career";
import FormCareer from "../pages/FormCareer";
import Confirm from "../pages/Confirm";


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
      { path: "career", element: <Career /> },
      { path: "formcareer", element: <FormCareer /> },
        { path: "confirm", element: <Confirm /> },
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