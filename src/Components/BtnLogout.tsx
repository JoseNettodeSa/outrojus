import "./BtnLogout.css"
import { Link } from "react-router-dom"

function BtnLogout() {
  return (
    <Link style={{textDecoration:"none",color:"white"}} to="/">
      <button id="logout" style={{background:"#7D817E17",marginTop:"5%",display:"flex",justifyContent:"center"}}>
       LogOut
      </button>
    </Link> 
  )
}

export default BtnLogout