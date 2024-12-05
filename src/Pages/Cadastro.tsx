import "./Cadastro.css"
import { Link } from "react-router-dom"

function Cadastro() {
  return (
    <div style={{minHeight : "100vh",background:"black"}}>
        <header style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" width={"40%"}  alt="" />
        </header>
        <div style={{color:"white", display:"flex",flexDirection:"column",justifyContent:"center",
        alignItems:"center"}}>
            <h1 style={{color:"#7D817EE5",textAlign:"center"}}>Cadastre-se</h1>
            <div id="cai">
                <label htmlFor="nome">Nome Completo:</label>
                <input type="text" id="nome" />
                <label htmlFor="email">Email Corporativo:</label>
                <input type="text" id="email" />
                <label htmlFor="senha">Senha:</label>
                <input type="text" id="senha" />
                <label htmlFor="senhaConf">Confirmar Senha:</label>
                <input type="text" id="senhaConf" />
                <label htmlFor="senha">Instituição / Empresa:</label>
                <input type="text" id="senha" />
                <label htmlFor="outro">CPF / CNPJ</label>
                <input type="text" id="outro" />
            </div> 
           <br />
            <Link to="/" style={{textDecoration:"none",color:"white",marginTop:"4%"}}>
            <button style={{background:"#7D817E17",padding:"20px",fontSize:"1.5rem"}}>Cadastrar</button></Link>
            
        </div>
    </div>
  )
}

export default Cadastro