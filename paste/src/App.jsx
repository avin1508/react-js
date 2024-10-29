
import Home from './components/Home';
import Paste from './components/Paste';
import ViewPaste from './components/ViewPaste';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element:
    <div className='w-full h-full flex flex-col'>
      <Navbar/>
      <Home/>
    </div>
  },
  {
    path: "/pastes",
    element:
    <div className='w-full h-full flex flex-col'>
      <Navbar/>
      <Paste/>
    </div>
  },
  {
    path: "/pastes/:id",
    element:
    <div className='w-full h-full flex flex-col'>
      <Navbar/>
      <ViewPaste/>
    </div>
  }
])



const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
