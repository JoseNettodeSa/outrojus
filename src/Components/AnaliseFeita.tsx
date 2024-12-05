import "./AnaliseFeita.css"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';

function AnaliseFeita() {

    const { id } = useParams();

  return (
    <div style={{background:"black",color:"white",minHeight:"100vh"}}>
    <div style={{display : "flex",justifyContent : "center"}} >
        <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
        width={"40%"}  alt="" />
    </div>
    <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/analise">Voltar</Link>
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"
    ,gap:"20px",marginBottom:"3%"}}>

        <img src="/src/assets/images/a4f46aacc2f743ab225c9462b7902703.png" width={100} alt="" />
        <p style={{textAlign:"center",color:"#467DE5"}}>Confira a Análise dos Processos {id}</p>
    </div>
    <div id="options">
        {id == "Trabalhista" &&
        <>
            <div id="col">
                <p>
                <b style={{margin:"25%"}}>Processos Trabalhistas</b> <br /><br />
                Tendência: <b>Alta</b> <br />
                A região do Recife, com forte presença de setores como comércio, serviços, e indústria, registra tradicionalmente um volume significativo de reclamações trabalhistas.<br /><br />

                <b style={{margin:"43%"}}>Foco </b><br /> <br />
                Vínculo de emprego não registrado: trabalhadores informais buscando reconhecimento de direitos.<br />
                Jornada de trabalho: demandas por pagamento de horas extras, intervalos e adicionais.<br />
                Rescisão indireta: conflitos por más condições de trabalho.<br />
                Indenizações por assédio moral: comum em grandes empresas.<br /><br />
                <b style={{margin:"40%"}}>Previsão</b><br /><br /> Com o aumento do trabalho remoto e flexibilização das relações laborais, pode haver mais litígios sobre condições de trabalho e benefícios.
                </p>
            </div>
        </>}
        {id == "Tributário" &&
        <>
            <div id="col">
                <p>
                <b style={{margin:"25%"}}>Processos Tributários</b> <br /><br />
                Tendência: <b>Moderada a Alta</b> <br />
                Empresas locais frequentemente questionam a aplicação de tributos estaduais como ICMS, ISS e IPVA.<br /><br />

                <b style={{margin:"43%"}}>Foco </b><br /> <br />
                ICMS e substituição tributária: divergências sobre o recolhimento em operações interestaduais.<br />
                Multas administrativas: contestação de autos de infração lavrados pela SEFAZ/PE.<br />
                Isenções fiscais: empresas questionam a negativa ou a revogação de benefícios fiscais.<br /><br />
                <b style={{margin:"40%"}}>Previsão</b><br /><br /> Com as reformas tributárias em discussão, espera-se uma intensificação de litígios relacionados à adaptação às novas regras fiscais.
                </p>
            </div>
        </>}
        {id == "Civil" &&
        <>
            <div id="col">
                <p>
                <b style={{margin:"32%"}}>Processos Cíveis</b> <br /><br />
                Tendência: <b>Alta</b> <br />
                Os processos cíveis abrangem um espectro variado, incluindo ações de consumo, contratos, e disputas familiares.<br /><br />

                <b style={{margin:"43%"}}>Foco </b><br /> <br />
                Direito do consumidor: litígios envolvendo empresas de telecomunicação, energia elétrica e bancos.<br />
                Ações de cobrança: crescimento de inadimplência devido a crises econômicas.<br />
                Questões familiares: disputas sobre pensão alimentícia, guarda de filhos e inventários.<br /><br />
                <b style={{margin:"40%"}}>Previsão</b><br /><br /> Um aumento contínuo em ações de consumo, impulsionado pela digitalização do comércio e serviços.
                </p>
            </div>
        </>}
        {id == "Penal" &&
        <>
            <div id="col">
                <p>
                <b style={{margin:"32%"}}>Processos Penais</b> <br /><br />
                Tendência: <b>Moderada</b> <br />
                A região de Recife, como um grande centro urbano, apresenta casos penais relacionados a crimes patrimoniais e contra a administração pública.<br /><br />

                <b style={{margin:"43%"}}>Foco </b><br /> <br />
                Crimes patrimoniais: como roubo, furto e estelionato. <br />
                Crimes contra a administração pública: corrupção, improbidade administrativa e desvio de verbas públicas. <br />
                Tráfico de drogas: recorrente nas regiões metropolitanas.<br /><br />
                <b style={{margin:"40%"}}>Previsão</b><br /><br /> Os processos relacionados à criminalidade cibernética e golpes financeiros tendem a crescer, acompanhando o aumento de crimes digitais.
                </p>
            </div>
        </>}
        {id == "Ambiental" &&
        <>
            <div id="col">
                <p>
                <b style={{margin:"25%"}}>Processos Ambientais</b> <br /><br />
                Tendência: <b>Crescimento</b> <br />
                Recife, com problemas históricos de saneamento e gestão ambiental, pode ser foco de litígios ambientais.<br /><br />

                <b style={{margin:"43%"}}>Foco </b><br /> <br />
                Danos ambientais: ações contra empresas e empreendimentos imobiliários. <br />
                Licenciamento ambiental: questionamento de concessões ou negativas de licença. <br />
                Poluição hídrica: especialmente no entorno do Rio Capibaribe e áreas de manguezais.<br /><br />
                <b style={{margin:"40%"}}>Previsão</b><br /><br /> Crescimento gradual de processos à medida que políticas de proteção ambiental sejam reforçadas e a população fique mais engajada no tema.
                </p>
            </div>
        </>}
        
    
    </div>
</div>
  )
}

export default AnaliseFeita