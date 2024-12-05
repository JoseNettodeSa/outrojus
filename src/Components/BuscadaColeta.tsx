import "./BuscadaColeta.css"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';

function BuscadaColeta() {

  const { id } = useParams();
  const { situacao } = useParams();
  const { tribunal } = useParams();

  return (
    
    <div style={{background:"black",color:"white",minHeight:"100vh"}}>
      {id == 'Civil' && 
       <>
          <div style={{display : "flex",justifyContent : "center"}} >
              <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
              width={"40%"}  alt="" />
          </div>
          <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/coleta">Voltar</Link>
          <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",
          gap:"20px",marginBottom:"3%"}}>
              <img src="/src/assets/images/cac769d1425cc75506ce3094c0fa3853.png" width={100} alt="" />
              <p style={{textAlign:"center",color:"#467DE5"}}>Resultados da Pesquisa: 1 <br />
              “{id}”, “{tribunal}” e “{situacao}”.</p>
          </div>
          <div id="opti">
              <p style={{padding:"10px"}}>
              Processo : 5001234-56.2023.8.26.1868  <br />
              Tribunal : {tribunal} <br />
              Data de Início : 11/10/2023 <br />
              Status : {situacao} <br />
              Natureza : {id} <br />
              Detalhes do Processo : <br />
              Inadimplemento de Contrato.
              </p>
          </div>
          <div style={{textAlign:"center",padding:"5%",color:"#467DE5"}}>
              <p>Tempo Estimado de Resolução: 6 meses <br />
              Baseado em: Processos semelhantes (analisados pela IA)</p>
          </div>
       </>}
       {id == 'Trabalhista' && 
       <>
          <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
            </div>
            <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/coleta">Voltar</Link>
          <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",
            gap:"20px",marginBottom:"3%"}}>

            <img src="/src/assets/images/cac769d1425cc75506ce3094c0fa3853.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>Resultados da Pesquisa: 1 <br />
            “{id}”, “{tribunal}” e “{situacao}”.</p>
          </div>
          <div id="opti">
            <p style={{padding:"10px"}}>
              Processo : 0005678-90.2024.5.06.0004 <br />
              Tribunal : {tribunal} <br />
              Data de Início : 14/05/2024 <br />
              Status : {situacao} <br />
              Natureza : {id} <br />
              Detalhes do Processo : <br />
              Rescisão Indireta, Adicional de Insalubridade e Horas Extras.
            </p>
          </div>
          <div style={{textAlign:"center",margin:"5%",color:"#467DE5"}}>
            <p>Tempo Estimado de Resolução: 6 meses <br />
            Baseado em: Processos semelhantes (analisados pela IA)</p>
          </div>
       </>}
       {id == 'Penal' && 
       <>
          <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
            </div>
            <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/coleta">Voltar</Link>
          <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",
            gap:"20px",marginBottom:"3%"}}>

            <img src="/src/assets/images/cac769d1425cc75506ce3094c0fa3853.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>Resultados da Pesquisa: 1 <br />
            “{id}”, “{tribunal}” e “{situacao}”.</p>
          </div>
          <div id="opti">
            <p style={{padding:"10px"}}>
              Processo : 0009876-54.2023.8.17.0001 <br />
              Tribunal : {tribunal} <br />
              Data de Início : 22/02/2023 <br />
              Status : {situacao} <br />
              Natureza : {id} <br />
              Detalhes do Processo : <br />
              Roubo Qualificado.
            </p>
          </div>
          <div style={{textAlign:"center",margin:"5%",color:"#467DE5"}}>
            <p>Tempo Estimado de Resolução: 6 meses <br />
            Baseado em: Processos semelhantes (analisados pela IA)</p>
          </div>
       </>}
       {id == 'Tributário' && 
       <>
          <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
            </div>
            <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/coleta">Voltar</Link>
          <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",
            gap:"20px",marginBottom:"3%"}}>

            <img src="/src/assets/images/cac769d1425cc75506ce3094c0fa3853.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>Resultados da Pesquisa: 1 <br />
            “{id}”, “{tribunal}” e “{situacao}”.</p>
          </div>
          <div id="opti">
            <p style={{padding:"10px"}}>
              Processo : 0034567-89.2023.8.17.9000 <br />
              Tribunal : {tribunal} <br />
              Data de Início : 22/02/2023 <br />
              Status : {situacao} <br />
              Natureza : {id} <br />
              Detalhes do Processo : <br />
              ICMS – Lançamento Tributário Indevido
            </p>
          </div>
          <div style={{textAlign:"center",margin:"5%",color:"#467DE5"}}>
            <p>Tempo Estimado de Resolução: 6 meses <br />
            Baseado em: Processos semelhantes (analisados pela IA)</p>
          </div>
       </>}
       {id == 'Ambiental' && 
       <>
          <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
            </div>
            <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/coleta">Voltar</Link>
          <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",
            gap:"20px",marginBottom:"3%"}}>

            <img src="/src/assets/images/cac769d1425cc75506ce3094c0fa3853.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>Resultados da Pesquisa: 1 <br />
            “{id}”, “{tribunal}” e “{situacao}”.</p>
          </div>
          <div id="opti">
            <p style={{padding:"10px"}}>
              Processo : 0012345-67.2023.8.17.0001 <br />
              Tribunal : {tribunal} <br />
              Data de Início : 22/02/2023 <br />
              Status : {situacao} <br />
              Natureza : {id} <br />
              Detalhes do Processo : <br />
              Dano Ambiental - Poluição Hídrica
            </p>
          </div>
          <div style={{textAlign:"center",margin:"5%",color:"#467DE5"}}>
            <p>Tempo Estimado de Resolução: 6 meses <br />
            Baseado em: Processos semelhantes (analisados pela IA)</p>
          </div>
       </>}
    </div>
  )
}

export default BuscadaColeta