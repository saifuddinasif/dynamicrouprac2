// import logo from './logo.svg';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Product from './Components/Product/Product';



function App() {

const router = createBrowserRouter([

  {path:'/home',  element: <Home></Home>},

  {path:'/about',  element: <About></About>},

  {path:'/products',  element: <Product></Product>},

  {path:'/',  element: <h1>default </h1>},


])

  return (
    <div className="App">
   <RouterProvider  router={router}></RouterProvider>
   
  


          
    </div>
  );
}

export default App;
