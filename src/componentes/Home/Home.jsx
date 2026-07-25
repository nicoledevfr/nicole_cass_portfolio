import "./Home.css";
import "../../Styles/root.css";
import minhafoto from "../../assets/minha_foto_nicole.png";

function Home() {
  return (
    <div className="container_home">
      <div className="container_esquerda">
        <span className="frase">Olá, meu nome é</span>
        <h1 className="titulo_nome">
          Nicole&nbsp;<span>Cassiano</span>
        </h1>
      </div>

      <div className="container_direita">
        <div className="container_foto">
          <div className="glow"></div>
          <img src={minhafoto} className="minha_foto" />
        </div>
      </div>
    </div>
  );
}

export default Home;
