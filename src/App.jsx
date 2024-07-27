import { Outlet } from 'react-router-dom'
import Nav from './Components/Nav'


function App() {
  return (
    <>
      <div className='container mx-auto'>
        <Nav></Nav>
      </div>
      <Outlet></Outlet>
    </>
  );
}

export default App
