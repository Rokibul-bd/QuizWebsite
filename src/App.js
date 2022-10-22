import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from "./Components/Courses/Courses";
import Main from "./Lyout/Main/Main";
function App() {
  const router = createBrowserRouter([
    {
      children: [
        {
          path: "/",
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Courses></Courses>
        },
        {
          path: '/topic',
          element: <div>Topic Page</div>
        },
        {
          path: '/static',
          element: <div>Static Page</div>
        },
        {
          path: '/blog',
          element: <div>Blog Page</div>
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
