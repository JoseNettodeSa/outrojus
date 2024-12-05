import "./EsqueciaSenha.css"
import { Link } from "react-router-dom"

function EsqueciaSenha() {
  return (
    <div style={{minHeight : "100vh",background:"black"}}>
        <header style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" width={"40%"}  alt="" />
        </header>
        <div style={{color:"white", display:"flex",flexDirection:"column",justifyContent:"center",
        alignItems:"center",margin:"2%"}}>
            <h1 style={{color:"#7D817EE5",textAlign:"center"}}>Esqueceu sua senha? <br /> Vamos te ajudar!</h1>
            <div id="cai">
                <label htmlFor="email">Email Corporativo:</label>
                <input type="text" id="email" />
                <label htmlFor="senha">Instituição / Empresa:</label>
                <input type="text" id="senha" />
            </div> 
            <button style={{background:"#7D817E17",padding:"20px",marginTop:"4%"}}>
                <Link to="/" style={{textDecoration:"none",color:"white",fontSize:"1.5rem"}}>Recuperar Senha</Link>
            </button>
        </div>
    </div>
  )
}

export default EsqueciaSenha