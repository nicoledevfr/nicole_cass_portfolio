import "./Projetos.css";
import imagemBreve from "../../assets/EM BREVE.png"
import { FaExternalLinkAlt } from "react-icons/fa";
function Projetos() {
  return (
    <div className="container_projetos">
      <h1>
        Meus<span>  Projetos</span>
      </h1>
      <div className="container_cards">
        <div className="cards">
          <img src={imagemBreve} alt="img"  className="img_projeto"/>
          <h2>Em breve</h2>
          
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a vero dolor minus pariatur vitae ipsum ea sapiente quisquam, reiciendis corrupti fugit voluptates? Ullam unde neque porro ex veniam doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur distinctio debitis, dicta illum inventore fugiat temporibus dolores molestiae, corrupti sed dolore at porro repellat, nobis commodi eius quam. Natus?</p>
          <span className="barra_tecnologias">JS/HTML/CSS</span>

           <div className="linha"></div>
           
         
          <div className="container_botao_site">
             <button className="botao_verSite">
            <FaExternalLinkAlt color="white"/> </button>
          </div>
         

        </div>
        <div className="cards">
           <img src={imagemBreve} alt="img"  className="img_projeto"/>
          <h2>Em breve</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a vero dolor minus pariatur vitae ipsum ea sapiente quisquam, reiciendis corrupti fugit voluptates? Ullam unde neque porro ex veniam doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur distinctio debitis, dicta illum inventore fugiat temporibus dolores molestiae, corrupti sed dolore at porro repellat, nobis commodi eius quam. Natus?</p>
          <span className="barra_tecnologias">JS/HTML/CSS</span>

           <div className="linha"></div>
           
         

        <div className="container_botao_site">
             <button className="botao_verSite">
            <FaExternalLinkAlt color="white"/> </button>
          </div>

        </div>
        <div className="cards">
             <img src={imagemBreve} alt="img"  className="img_projeto"/>
          <h2>Em breve</h2>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem a vero dolor minus pariatur vitae ipsum ea sapiente quisquam, reiciendis corrupti fugit voluptates? Ullam unde neque porro ex veniam doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Error aspernatur distinctio debitis, dicta illum inventore fugiat temporibus dolores molestiae, corrupti sed dolore at porro repellat, nobis commodi eius quam. Natus?</p>
            <span className="barra_tecnologias">JS/HTML/CSS</span>

           <div className="linha"></div>
           
         
<div className="container_botao_site">
             <button className="botao_verSite">
            <FaExternalLinkAlt color="white"/> </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Projetos;
