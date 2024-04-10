import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import { Home } from './components/Home';
import { Login } from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Producted } from './components/Producted';
import { Register } from './components/Register';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='/' element={<Producted />} >
        <Route path='/' index element={<Home />} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


