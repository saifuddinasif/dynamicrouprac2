// import logo from './logo.svg';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Friend from './Components/Friend/Friend';
import Home from './Components/Home/Home';
import Main from './Components/Main/Main';
import Product from './Components/Product/Product';



function App() {

const router = createBrowserRouter([

  {path:'/', 
   element: <Main></Main>, 
  
  children:[
    {path:'/',  element: <Home></Home>},
    {path:'/home',  element: <Home></Home>},
    {path:'/product',  element: <Product></Product>},
    {path:'/friend', 
    
    loader: async () => {

      return fetch(`https://jsonplaceholder.typicode.com/users`)
    },

    element: <Friend></Friend>},

  ]},


  {path:'/about',  element: <About></About>},
/* for all the wrong search  */
  {path:'*',  element:<h1>404 not found </h1>},
])

  return (
    <div className="App">
   <RouterProvider  router={router}></RouterProvider>
   
  


          
    </div>
  );
}

export default App;
