import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './Routes/Router/Router';

function App() {

  return (
    <div className='bg-background-500'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
