import GlobalStyle from './GlobalStyle.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home.jsx';
import MoviePage from './pages/MoviePage.jsx';
import { BannerContainer } from './components/BannerContainer/BannerContainer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    component: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/:id',
        element: <MoviePage />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
