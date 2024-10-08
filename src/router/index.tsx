import {
  RouterProvider
} from "react-router-dom"
import { createBrowserRouter } from "react-router-dom"

import Test from "pages/test";
import TodoList from "pages/todolist";

interface RouteProps {
  path: string;
  element: React.ReactNode;
}

const routes: Array<RouteProps> = [
  {
    path: "/",
    element: <Test />
  },
  {
    path: "/todolist",
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