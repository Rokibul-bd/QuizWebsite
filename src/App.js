import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Lyout/Main/Main";
function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          element: <div>This common path</div>
        }
      ],
      element: <Main></Main>
    }
  ])
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
