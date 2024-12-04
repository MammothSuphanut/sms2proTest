import { createBrowserRouter } from 'react-router-dom';
import RedirectPage from './Redirect';
import NotFound from '@pages/NotFound';
import TodoListPage from '@pages/TodoListPage';
import MainLayout from '@layouts/MainLayout';

export const routers = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <RedirectPage />,
      },
      {
        path: 'todo',
        element: <TodoListPage />,
      },
    ],
  },
]);
