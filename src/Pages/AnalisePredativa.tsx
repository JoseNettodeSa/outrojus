import "./AnalisePredativa.css"
import { Link } from "react-router-dom"
import { useState } from "react";

function AnalisePredativa() {

  const [id, setId] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setId(event.target.value);
  };

  return (
    <div style={{background:"black",color:"white",minHeight:"100vh"}}>
        <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
        </div>
        <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/home">Voltar</Link>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"
        ,gap:"20px",marginBottom:"3%"}}>

            <img src="/src/assets/images/a4f46aacc2f743ab225c9462b7902703.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>CONFIRA  AS ANÁLISES PREDITIVAS.</p>
        </div>
        <div id="options">
          <select onChange={handleChange} value={id} name="" id="">
            <option value="" disabled selected hidden>Selecione a Análise</option>
            <option value="Civil">Civil</option>
            <option value="Trabalhista">Trabalhista</option>
            <option value="Penal">Penal</option>
            <option value="Tributário">Tributário</option>
            <option value="Ambiental">Ambiental</option>
          </select>
          <Link to={`/analiseFeita/${id}`}>
          <button id="butn" style={{background:"#7D817E17",marginTop: "20px",padding:"15px",
                textAlign:"center"
            }}><p>Buscar</p></button>
        </Link>
        </div>
    </div>
  )
}

export default AnalisePredativa