import "./Home.css";
import "../../Styles/root.css";
import minhafoto from "../../assets/minha_foto.png"
function Home() {
  return (
    <div className="container_home">
      <div className="container_esquerda">
        <h1 className="titulo_nome">
          Nicole&nbsp;<span>Cass</span>
        </h1>
        <h2 className="subtitulo_frase">
            Creating modern interfaces
        </h2>
      </div>

      <div className="container_direita">
        <div className="container_foto">
            <div className="glow"></div>
         <img src={minhafoto}className="minha_foto"/>   
        </div>
        
      </div>

    </div>
  );
}

export default Home;

