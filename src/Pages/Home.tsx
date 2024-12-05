import "./Home.css"
import BtnLogout from "../Components/BtnLogout"
import { Link } from "react-router-dom"

function Home() {
  return (
    <div style={{background:"black",color:"white",minHeight:"100vh"}}>
        <header style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" width={"40%"}  alt="" />
        </header>
        <section>
            <h1 style={{textAlign:"center",color:"#7D817E",margin:"3%"}}>Bem-vindo(a) à Plataforma de Análise de Dados Judiciais. <br /><br />
            Utilize as ferramentas abaixo para coletar dados judiciais, gerar <br /> previsões e 
            criar relatórios personalizados.</h1>

            <div id="ele">
                <Link style={{textDecoration:"none",color:"#467DE5"}} to="/coleta">
                    <div>                  
                        <img src="/src/assets/images/cac769d1425cc75506ce3094c0fa3853.png" width={100} alt="" />
                        <p>Coletas de Dados Judiciais</p>           
                    </div>
                </Link>
                <Link style={{textDecoration:"none",color:"#467DE5"}} to="/analise">
                    <div>
                        <img src="/src/assets/images/a4f46aacc2f743ab225c9462b7902703.png" width={100} alt="" />
                        <p >Análise Preditiva
                        com IA</p>
                    </div>
                </Link>
                <Link style={{textDecoration:"none",color:"#467DE5"}} to="/relatorios">
                    <div>
                        <img src="/src/assets/images/912df1fd4870dd78610575c37cc32853.png" width={100} alt="" />
                        <p>Relatórios e Feedback</p>
                    </div>
                </Link>
            </div>
            <BtnLogout/>
        </section>
    </div>
  )
}

export default Home