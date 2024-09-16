import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import SignIn from "./SignIn";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/Browse",
      element: <Browse />,
    },
    {
      path: "/SignIn",
      element: <SignIn />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
