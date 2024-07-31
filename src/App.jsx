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
import Pages from "./pages/Pages";
import Unfounded from "./pages/Unfounded";
//other things
import { Toaster } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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
            <Route path="/pages" element={<Pages />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Unfounded />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </>
  );
}
