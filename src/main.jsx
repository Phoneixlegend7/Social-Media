import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider,  createBrowserRouter } from 'react-router-dom'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'  
import CreatePost, {createPostAction} from './components/createpost.jsx'
import Postlist from './components/Postlist.jsx'

const router = createBrowserRouter([
  {path : '/', element : <App/>,children : [
    {path: '/', element: <Postlist/>},
    {path: '/create-post', element: <CreatePost/>, action : createPostAction},
  ],
},
 

]);
createRoot(document.getElementById('root')).render(

  
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>
)
