import './App.css'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div style={{background : "#000000"}}>
      
      <Outlet />
      
    </div>
  )
}

export default App
