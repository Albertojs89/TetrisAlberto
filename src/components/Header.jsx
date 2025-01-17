
export function Header(){
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark rounded border border-primary">
        <div className="container-fluid">
          {/* Logotipo */}
          <a className="navbar-brand text-warning" href="#">
            <img src="src/assets/logo.png" alt="Logo" width="80" height="80" />
            Tetris
          </a>

          {/* Enlaces del menú */}
          <div className="d-flex">
            <a href="#" className="navbar-brand text-warning mx-3">
              Partidas
            </a>
            <a href="#" className="navbar-brand text-warning mx-3">
              Jugar
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;