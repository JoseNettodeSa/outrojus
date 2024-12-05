import "./Relatorios.css"
import { Link } from "react-router-dom"
import { useState } from "react";


function Relatorios() {

    const [id, setId] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setId(event.target.value);
    };
    console.log(id)


  return (
    <div style={{background:"black",color:"white",minHeight:"100vh"}}>
        <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/public/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
        </div>
        <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/home">Voltar</Link>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",
        gap:"20px",marginBottom:"3%"}}>
            <img src="/public/images/912df1fd4870dd78610575c37cc32853.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>Confira relatórios:</p>
        </div>
        <div id="options">
            <select onChange={handleChange} value={id} name="" id="">
                <option value="" disabled hidden selected>Selecione Os Tipos de Relatório</option>
                <option value="Civil">Civil</option>
                <option value="Trabalhista">Trabalhista</option>
                <option value="Penal">Penal</option>
                <option value="Tributário">Tributário</option>
            </select>
            <Link to={`/relatorioGerado/${id}`}><button style={{background:"grey",width:"100%"}}>Criar Relatório</button></Link>
        </div>
        <div>
            <p style={{fontSize:"1.5rem",textAlign:"center",marginTop:"3%"}}>Deixe seu feedback, 
                <Link to="/feedback" style={{textDecoration:"none",color:"#467DE5"}}> clicando aqui. :)</Link></p>
        </div>
    </div>
  )
}

export default Relatorios