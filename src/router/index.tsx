import {
  RouterProvider
} from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"

import Home from "pages/home";
import TodoList from "pages/todolist";

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

const routes: Array<RouteProps> = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/posts",
    element: <TodoList />
  }
]

const router = createBrowserRouter(routes)

function Router () {
  
  return (
    <RouterProvider router={router} />
  )
}

export default Router;