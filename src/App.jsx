//
//
//old routes
import { Route, Routes, useLocation } from "react-router-dom";
//new routes
// import { RouterProvider, createBrowserRouter } from "react-router-dom";
//pages
import Layout from "./Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
//other things
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import About from "./pages/About";
import OurTeam from "./pages/OurTeam";
import FAQs from "./pages/FAQs";
import Booking from "./pages/Booking";
import Error404 from "./pages/Error404";
import ServicesDetails from "./pages/ServicesDetails";
import BlogsDetails from "./pages/BlogsDetails";

//scroll to top function
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    window.scrollTo({
      top: 0,
      behavior: "smooth",});
  }, [pathname]);
  return null;
};

export default function App() {
  //
  // const routes = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: (
  //       // <ProtectedRoute>
  //       <Layout />
  //       // </ProtectedRoute>
  //     ),
  //     children: [
  //       { index: true, element: <Home /> },
  //       { path: "product/:id", element: <ProdDetails /> },
  //       { path: "category/:id", element: <Category /> },
  //       { path: "cart", element: <Cart /> },
  //       { path: "signIn", element: <SignIn /> },
  //       { path: "signUp", element: <SignUp /> },
  //       { path: "*", element: <Unfounded /> },
  //     ],
  //   },
  // ]);

  return (
    <>
      {/* <AnimatePresence mode="wait">
              <RouterProvider router={routes}></RouterProvider>
            </AnimatePresence> */}

      <AnimatePresence mode="wait">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Our-Team" element={<OurTeam />} />
            <Route path="/FAQ,s" element={<FAQs />} />
            <Route path="/Booking" element={<Booking />} />
            <Route path="/Blogs" element={<Blogs />} />
            <Route path="/Blogs-Details" element={<BlogsDetails />} />
            <Route path="/Services" element={<Services />} />
            <Route path="/Services-Details" element={<ServicesDetails />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<Error404 />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
}
