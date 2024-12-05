import "./Feedbacks.css"
import { Link } from "react-router-dom"

function Feedbacks() {
  return (
    <div style={{background:"black",color:"white",minHeight:"100vh"}}>
        <div style={{display : "flex",justifyContent : "center"}} >
            <img style={{paddingTop:"1%"}} src="/src/assets/images/146c4312d320fa52b8d4758956ec4831.png" 
            width={"40%"}  alt="" />
        </div>
        <Link style={{color:"aliceblue",fontSize:"1.5rem",textDecoration:"none",marginLeft:"2%"}} to="/home">Voltar</Link>
        <div style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",
        gap:"20px",marginBottom:"3%"}}>
            <img src="/src/assets/images/37e379db55dadc2452d6472bb12e4a45.png" width={100} alt="" />
            <p style={{textAlign:"center",color:"#467DE5"}}>Estamos sempre buscando melhorar nossos serviços. 
                <br /> Sua opinião é fundamental!
            </p>
        </div>
        <div id="cont">
            <label htmlFor="opi1">O que você achou do sistema?</label>
            <textarea style={{width:"30%",height:"100px"}}
             placeholder="Por favor, compartilhe sua experiência e nos diga como podemos melhorar." 
            name="" id="opi1"></textarea>
            <label htmlFor="opi2">Quais funcionalidades você gostaria de ver no futuro?</label>
            <textarea style={{width:"30%",height:"100px"}}
             placeholder="Ajude-nos a entender suas necessidades e expectativas." 
            name="" id="opi2"></textarea>
        </div>
        <div>
           <button style={{display:"flex",margin:"auto",background:"#467DE5",
            padding:"15px",fontSize:"1.2rem",marginTop:"2%"
           }}>Enviar Feedback</button>
        </div>
    </div>
  )
}

export default Feedbacks