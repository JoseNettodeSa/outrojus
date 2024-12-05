import { useState } from "react";
import "./ColetadeDados.css"
import { Link } from "react-router-dom"

function ColetadeDados() {

    const [id, setId] = useState('');
    const [situacao,setSituacao] = useState('');
    const [tribunal,setTribunal] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setId(event.target.value);
    };
    const handleChange1 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setTribunal(event.target.value);
    };
    const handleChange2 = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSituacao(event.target.value);
    };

  return (
    <div style={{background:"black",color:"white",minHeight:"100vh"}}>
        <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
        </div>
        <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/home">Voltar</Link>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",
            marginTop:"5%",gap:"20px",marginBottom:"3%"}}>

            <img src="/src/assets/images/cac769d1425cc75506ce3094c0fa3853.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>PESQUISE DADOS JUDICIAIS APLICANDO FILTROS BÁSICOS PARA <br />
            OBTER UMA LISTA DE PROCESSOS.</p>
        </div>
        <div id="options">
            <select onChange={handleChange} value={id} name="" id="">
                <option value="" disabled selected hidden>Selecione o Tipo de Processo</option>
                <option value="Civil">Civil</option>
                <option value="Trabalhista">Trabalhista</option>
                <option value="Penal">Penal</option>
                <option value="Tributário">Tributário</option>
                <option value="Ambiental">Ambiental</option>
            </select>
            <select onChange={handleChange1} value={tribunal} name="" id="">
                <option value="" disabled selected hidden>Selecione o Tribunal</option>
                <option value="TRT6">TRT6</option>
                <option value="TRF5">TRF5</option>
                <option value="TJPE">TJPE</option>
            </select>
            <select onChange={handleChange2} value={situacao} name="" id="">
                <option value="" disabled selected hidden>Selecione o Status do Processo</option>
                <option value="Em Andamento">Em Andamento</option>
                <option value="Concluído">Concluído</option>
                <option value="Em Recurso">Em Recurso</option>
            </select>
        </div>
       
       <Link to={`/buscaColeta/${id}/${tribunal}/${situacao}`}>
        <button id="butn" style={{background:"#7D817E17",marginTop: "20px",padding:"15px",
                textAlign:"center"
            }}><p>Buscar</p></button>
        </Link>
        
      

    </div>
  )
}

export default ColetadeDados