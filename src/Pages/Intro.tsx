import "./Intro.css"
import { useState } from "react"
import { Link } from "react-router-dom"


const Intro = () => {

    const [stage,setStage] = useState(0)
    const [login,setLogin] = useState(false)

    function nextStage(){
        setStage(prevStage => prevStage + 1);
        if(stage === 2){
            setLogin(true);
        }
    }
    function goTrougth(){
        setStage(stage + 4)
        setLogin(true);
    }
    function goBack(){
        setStage(0)
        setLogin(false);
    }
  

  return (
    <>
    <header style={{display : "flex",justifyContent : "center"}} >
       <img onClick={goBack} style={{paddingTop:"1%",cursor:"pointer"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" width={"40%"}  alt="" />
    </header>
    <div style={{minHeight : "90vh"}}>
        { stage == 0 &&
            <div className="Pri-elemen">
                <h1>Coleta de Dados Judiciais</h1>
                <img src="/src/assets/images/cac769d1425cc75506ce3094c0fa3853.png" width={100} alt="" />
                <p style={{textAlign:"center"}}>Conecte-se a bancos de dados públicos e pesquise <br/> 
                processos judiciais com filtros personalizados.</p>
                <div>
                    <p style={{color:"#7D817E"}}>Dica de uso: Escolha tribunal, 
                        tipo de processo e status para obter as informações que precisa.
                    </p>
                </div>
            </div>
        },
        { stage == 1 &&
            <div className="Pri-elemen">
                <h1>Análise Preditiva com IA</h1>
                <img src="/src/assets/images/a4f46aacc2f743ab225c9462b7902703.png" width={100} alt="" />
                <p style={{textAlign:"center"}}>Veja previsões sobre o tempo de resolução de <br /> processos com
                     base em inteligência artificial.</p>
                <div>
                    <p style={{color:"#7D817E"}}>Dica de uso: Acesse detalhes dos processos e obtenha 
                        previsões personalizadas.
                    </p>
                </div>
            </div>
        },
        { stage == 2 &&
            <div className="Pri-elemen">
                <h1>Relatórios e Feedback</h1>
                <img src="/src/assets/images/912df1fd4870dd78610575c37cc32853.png" width={100} alt="" />
                <p style={{textAlign:"center"}}>Gere relatórios personalizados e forneça <br />
                    feedback para melhorar as previsões da IA.</p>
                <div>
                    <p style={{color:"#7D817E"}}>Dica de uso: Exporte seus relatórios em PDF/CSV e 
                        contribua com suas avaliações.
                    </p>
                </div>
            </div>
        }

        {!login && 
        <div className="progress">
            <button id="btn" onClick={goTrougth}>Pular</button>
            {stage == 0 ? <div style={{background:"grey"}}></div> : <div></div>}
            {stage == 1 ? <div style={{background:"grey"}}></div> : <div></div>}
            {stage == 2 ? <div style={{background:"grey"}}></div> : <div></div>}
            <button id="btn" onClick={nextStage}>Continuar</button>
        </div>}

        {login &&
        <div style={{color:"white", display:"flex",flexDirection:"column",justifyContent:"center",
        alignItems:"center",margin:"2%"}}>
            <h1 style={{color:"#7D817EE5"}}>Acesse sua área para explorar suas análises e manter-se atualizado.</h1>
            <div id="cai">
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" />
                <label htmlFor="senha">Senha:</label>
                <input type="password" id="senha" />
                <p><Link style={{textDecoration:"none",color:"white"}} to="/esqueciASenha">Esqueci Minha Senha</Link></p>
                <Link to="/home" style={{textDecoration:"none",color:"white"}}><button style={{width:"100%"}}>Entrar na Conta</button></Link>
            </div> 
            <p style={{margin:"2%"}}>Ainda não é membro? <Link to="/cadastro" style={{cursor:"pointer",
            textDecoration:"underline",color:"white"}}>Crie sua conta.</Link></p>  
        </div>
        }

    </div> {/*Div Principal do Conteúdo*/}
    </>
  )
}

export default Intro