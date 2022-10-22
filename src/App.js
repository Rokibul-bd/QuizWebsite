import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Blogs from "./Components/Blogs/Blogs";
import Courses from "./Components/Courses/Courses";
import Quiz from "./Components/quiz/Quiz";
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
          path: '/:id',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
          },
          element: <Quiz></Quiz>
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
          element: <Blogs></Blogs>
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
