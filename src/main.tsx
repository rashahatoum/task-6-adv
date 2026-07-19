import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Newsletter from './pages/Newsletter.tsx';
import RootLayout from './pages/RootLayout.tsx';
import { Provider } from 'react-redux';
import { store } from './Redux/store/store.ts';
import Home from './pages/Home.tsx';
import BlogDetails from './pages/BlogDetails.tsx';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "newsletter",
        element: <Newsletter />,
      },
    ]
  }
],
  {
    basename: "task-6-adv",
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
