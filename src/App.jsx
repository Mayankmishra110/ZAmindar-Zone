import Layout from "./routes/layout/layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
