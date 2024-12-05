
import "./RelatorioGerado.css"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';


function RelatorioGerado() {

    
    const { id } = useParams();
    console.log(id)

  return (
    <div style={{background:"black",color:"white",minHeight:"100vh"}}>
        <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
        </div>
        <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/relatorios">Voltar</Link>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"
        ,gap:"20px",marginBottom:"3%"}}>

            <img src="/src/assets/images/23218824823c957ecc4c35cc639c036b.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>Relatorio Gerado:</p>
        </div>
        <div id="te">

            {id == "Trabalhista" &&
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingBottom:"10px"}}>
                <img src="/src/assets/images/trabalhista.png" width={600} alt="" /><br />
                <p>Aqui está o gráfico mostrando o número de processos trabalhistas no Brasil de 2021 a 2023. <br />
                Ele evidencia um crescimento contínuo no volume de ações, que saltou de 2,88 milhões em 2021 para 3,5 milhões em 2023. <br />
                </p>
            </div>
            }
            {id == "Penal" &&
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingBottom:"10px"}}>
                <img src="/src/assets/images/penal.png" width={600} alt="" /><br />
                <p><br />
                Número de processos por estado: Mostra a quantidade de processos em estados como São Paulo, Rio de Janeiro, entre outros.<br /><br />
                Tipos de crimes mais processados: Destaca os crimes mais comuns, como tráfico de drogas e roubo.<br /><br />
                Taxa de condenações versus absolvições: Representada em um gráfico de pizza, mostrando que 65% dos casos resultam em condenação.<br /><br />
                Duração média dos processos por estado: Aponta a média de anos que os processos levam para serem concluídos.<br /><br />
                Percentual de casos no tribunal do júri: Mostra a baixa porcentagem de casos que chegam a julgamento no júri popular.</p>
            </div>
            }
            {id == "Tributário" &&
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                <img src="/src/assets/images/Captura de tela 2024-11-26 084116.png" width={600} alt="" /><br />
                <p style={{marginLeft:"5%"}}>O gráfico apresenta a evolução dos processos dos tributários no Brasils em três categorias principais: <br /><br />

                <b>Processos Federais <br /><p>(barras azuis)</p></b> <br /><br />


                São os mais numerosos, começando com 3,45 milhões em 2019,
                chegaram a 4,35 milhões em 2023.<br />
                Mostram crescimento constante ano após ano.<br /> <br />


                <b>Processos Estaduais <p>(barras verdes)</p></b><br /><br />


                Segunda categoria maior.<br />
                Começaram com 2,1 milhões em 2019,
                alcançaram 2,83 milhões em 2023.<br />
                Também apresentam tendência de crescimento.<br /><br />


                <b>Processos Municipais <p>(barras amarelas)</p></b><br /><br />


                Menor volume entre as três categorias,
                iniciaram com 980 mil em 2019,
                chegaram a 1,42 milhões 2023.<br />
                Mantêm padrão de crescimento similar.<br /><br />

                <b>Observações Gerais :</b><br /><br />

                Existe uma tendência uma clara de crescimento em todas como esferas<br />
                Uma proporção entre como categorias se mantém no que em estável ao longo dos anos<br />
                Os federais processos representam aproximadamente o dobro de municipais.
                </p>
            </div>
            }
            {id == "Civil" &&
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingBottom:"10px"}}>
                <img src="/src/assets/images/renomear1.png" width={600} alt="" /><br />
                <p>
                    <b>Gráfico de Linhas <p>(Principal - Superior)</p></b><br />
                    Mostra a evolução temporal de 2019 a 2023 linhas diferentes de três com:<br /><br />
                    Linha Azul (Novos Processos): de 2,1 milhões em 2019 para 2,7 em 2023<br />
                    Linha Verde (Processos Arquivados): de 1,8 dem de param (2,44)<br />
                    Linha Amarela (Processos Pendentes): de 4 milhões,5 para 5,7 milhões<br /><br />
                    <b>Observação</b> <br /> Uma queda em 2020 (possivelmente à pandemia) recupera e a um de 2021<br />
                    Os processos pendentes mantêm tendência tendência crescente, <br /> indicando acúmulo sem sistema judicial.
                </p><br />
                <img src="/src/assets/images/renomear2.png" width={600} alt="" /><br />
                <b>Gráfico de Pizza</b><br />
                <p style={{marginRight:"18%"}}>
                   
                    Mostra distribuição dos tipos de processos civis:<br /><br />


                    Família: 30% (maior fatia - azul)<br />
                    Contratos: 25% (verde)<br />
                    Consumidor: 20% (amarelo)<br />
                    Imobiliário: 15% (laranja)<br />
                    Outros: 10% (roxo)
                </p><br />
                <img src="/src/assets/images/renomear3.png" width={600} alt="" /><br />
                <b>Gráfico de Barras </b> <br />
                <p style={{marginLeft:"18%",width:"70%"}}>
                    
                    Foca nos processos ano a ano até 2023:<br /><br />
                    Uma queda em 2020 (1,8 milhões).<br />
                    Uma recuperação em 2021 (2,3 milhões).<br />
                    O crescimento constante em 2023 até (2,7 milhões).<br /> <br />
                    <b style={{marginRight:"24%"}}>Tendências Principais</b><br />
                    Existe um crescimento constante nos processos de 2020, 
                    o número de processos pendentes cresce mais rapidamente que os arquivados.<br />
                    Direito de Família representa a maior parte processos civis.<br />
                    
                </p>
            </div>
            }
        </div>
    </div>
  )
}

export default RelatorioGerado