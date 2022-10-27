
import './App.css';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Main from './Layouts/Main';
import Blog from './Components/Blog/Blog';
import Courses from './Components/Courses/Courses';
import FAQ from './Components/FAQ/FAQ';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Details from './Components/Details/Details';
import Home from './Components/Home/Home';
import Premiumaccess from './Components/Premiumaccess/Premiumaccess';
import PrivateRoute from './Components/PrivateRout/PrivateRoute';
import Toggole from './Components/Toggole/Toggole';
import Error from './Components/error/Error';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:"/",
          element:<Home></Home>

        },
        {
          path: "/blog",
          element: <Blog></Blog>
        },
        {
          path: "/courses",
          element: <Courses></Courses>
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<Signup></Signup>
        },
        {
          path: "/details/:id",
          element: <Details></Details>,
          loader:({params})=> fetch(`https://programming-hub-server.vercel.app/courses/${params.id}`)
        
        },
        {
          path:'/premium/:id',
          element: <PrivateRoute><Premiumaccess></Premiumaccess></PrivateRoute>,
          loader: ({params})=> fetch(`https://programming-hub-server.vercel.app/courses/${params.id}`)
        },
        {
          path:'/toggle',
          element:<Toggole></Toggole>
        },
        {
          path:'*',
          element: <Error></Error>
        }
        
      ]
    },
  ]);

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  );
}

export default App;
