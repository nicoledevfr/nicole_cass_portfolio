import "./Menu.css";

function Menu() {
  return (
    <header className="meu-menu">
      <div className="container_menu">
        <div className="container_nome">
          <h4>Nicole Cass</h4>
        </div>
        <div className="container_nav">
          <nav>
            <a href="#contato">Contato</a>
            <a href="#habilidades">Habilidades</a>
            <a href="#projetos">Meus projetos</a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Menu;
