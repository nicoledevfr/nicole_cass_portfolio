import "../../Styles/Reset.css";
import "./Contato.css";
import { FaGithub } from "react-icons/fa";
import { TbBrandGmail } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";

function Contato() {
  return (
    <div id="contato" className="container_contato">
      <div className="container-titulo-contato">
        <h2 className="titulo-contato">Contato</h2>
        <p>
          Vamos conversar? Estou disponível para Networking e oportunidades...
        </p>
      </div>
      <div className="container-informacoes-contato">
        <div className="contato-divs">
          <a href="https://github.com/nicoledevfr" target="_blank" rel="noreferrer">
            <span className="icon-contato">
              <FaGithub color="black" size="40" />
            </span>
            <span className="usuario-e-botao-link">
              @nicoledevfr <TbExternalLink className="botao-link" />
            </span>
          </a>
        </div>
        <div className="contato-divs">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=nicolecassdevf@gmail.com"
          target="blank">
            <span className="icon-contato">
              <TbBrandGmail color="black" size="40" />
            </span>
            <span className="usuario-e-botao-link">
              nicolecassdevf@gmail.com <TbExternalLink className="botao-link" />
            </span>
          </a>
        </div>
        <div className="contato-divs">
          <a href="https://www.linkedin.com/in/nicole-cassiano-dev" target="_blank" rel="noreferrer">
            <span className="icon-contato">
              <FaLinkedin color="black" size="40" />
            </span>
            <span className="usuario-e-botao-link">
              www.linkedin.com/in/nicole-cassiano-dev <TbExternalLink className="botao-link" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contato;
