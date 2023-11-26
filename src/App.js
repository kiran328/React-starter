import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AllMeetupsPage from "./pages/AllMeetupsPage";
import NewMeetupPage from "./pages/NewMeetupPage";
import FavoriteMeetupsPage from "./pages/FavoriteMeetupsPage";
import Layout from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <AllMeetupsPage />
      },
      {
        path: "/new-meetup",
        element: <NewMeetupPage />,
      },
      {
        path: "/favorites",
        element: <FavoriteMeetupsPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
