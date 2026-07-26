import "./Habilidades.css";
import "../../Styles/Reset.css";
import { FaGear } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { TbSql } from "react-icons/tb";
import { FaServer } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { TbBrandVite } from "react-icons/tb";
import { SiReactrouter } from "react-icons/si";
import tinta from "../../assets/tinta.png";

function Habilidades() {
  return (
    <div id="habilidades" className="container_habilidades">
      <h1 className="titulo-habilidade">H<span className="contraste-titulo-habilidade">a</span>bilidades</h1>
      <div className="cards_skills">
        <div className="card-esquerda">
          <div className="tinta">
            <img src={tinta} alt="pngtinta"  className="img-tinta"/>
          </div>
          <h1 className="titulocard">
            <span className="contraste-titulo-frontend">Fron</span>t-End
          </h1>
          <p className="descricao-card">
            Desenvolvimento de interfaces modernas e responsivas com React,
            JavaScript, HTML e CSS.
          </p>
          <div className="lista-card">
            <ul>
              <li>HTML & CSS <FaHtml5  className="simbolo-html"/> <FaCss3Alt className="simbolo-css" /> </li>
              <li>React <FaReact className="simbolo-react"/></li>
              <li>Vite <TbBrandVite  className="simbolo-vite"/></li>
              <li>React Router <SiReactrouter className="simbolo-reactrouter"/></li>
              <li>Fetch API <FaServer className="simbolo-API"/></li>
            </ul>
            <ul className="nivel-experiencia-card">
              <li>Experiência Prática </li>
              <li>Experiência Prática </li>
              <li>Experiência Prática </li>
              <li>Experiência Prática </li>
              <li>Experiência Prática </li>
            </ul>
          </div>
        </div>

        <div className="card-direita">
          <FaGear className="engrenagem" />
          <h1 className="titulocard">
            Back-End + Dat<span className="contraste-titulo-backend">aBa</span>
            se
          </h1>
          <p className="descricao-card">
            Desenvolvimento de APIs REST, lógica de servidor e gerenciamento de
            bancos de dados relacionais.
          </p>
          <div className="lista-card">
            <ul className="nome-tecnologia">
              <li>
                Node.js <FaNodeJs className="simbolo-nodejs" />
              </li>
              <li>
                Express.js <SiExpress className="simbolo-expressjs" />
              </li>
              <li>
                PostgreSQL{" "}
                <DiPostgresql size={15} className="simbolo-postgreSQL" />
              </li>
              <li>
                SQL <TbSql className="simbolo-SQL" />
              </li>
              <li>
                Rest API <FaServer size={10} className="simbolo-API" />
              </li>
            </ul>
            <ul className="nivel-experiencia-card">
              <li>Experiência Prática </li>
              <li>Experiência Prática </li>
              <li>Experiência Prática </li>
              <li>Experiência Prática </li>
              <li>Experiência Prática </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Habilidades;
