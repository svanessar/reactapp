import './header.css';

 function Header(){
    return(
        <header>
             <nav id="logo-navbar">
      <div class="logo">
        <h1>sindy</h1>
        <i class="fa-solid fa-bars" id="icon"></i>
      </div>

      <div class="menu" id="menu">
        <a href="index.html" class="item">Inicio</a>
        <a href="#ubicanos" class="item">Ubícanos</a>
        <a href="#opiniones" class="item">Opiniones</a>
        <a href="./pages/login/Login" class="item"><button class="navbar-button">
            <i class="fa-solid fa-user"></i> Iniciar Sesión
          </button></a>
      </div>
    </nav>
   
        </header>
    );
 }
 export default Header;