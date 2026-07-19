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
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog/:id",
        element: <BlogDetails />,
      },
      {
        path: "/newsletter",
        element: <Newsletter />,
      },
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
