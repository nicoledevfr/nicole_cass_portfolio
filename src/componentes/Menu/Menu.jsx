import "./Menu.css";

function Menu() {
  return (
    <header className="Menu">
      <div className="container_menu">
        <div className="container_nome">
          <h4>Nicole Cass</h4>
        </div>
        <div className="container_nav">
          <nav>
            <a href="">Contato</a>
            <a href="">Habilidades</a>
            <a href="">Meus projetos</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Menu;
