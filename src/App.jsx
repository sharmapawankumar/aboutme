import { createBrowserRouter, RouterProvider } from "react-router";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import AppLayout from "./components/Layout/AppLayout";
import ErrorPage from "./pages/ErrorPage";
import ContactUs from "./pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <About />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "education",
        element: <Education />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
    ],
  },
]);

// export const App = () => {
//   return (
//     <div className="bg-[#050414]">
//       <h1>pawan</h1>
//       <Contact />
//     </div>
//   );
// };

export const App = () => {
  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
