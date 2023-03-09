
import icono from './icono-sushi.svg';
import CartWidget from '../CartWidget/CartWidget.js';
import './NavBar.css'

const NavBar = () => {

return(

    <nav className="navbar NavBar navbar-expand-md navbar-light">

        <div class="container-fluid navigation">

            <div class="navbar-brand iconoSushi">
                <a href="index.html">
                            <img src={icono} className="imgIconoSushi" alt="icono de sushi" />
                        </a>
                <div class="iconoSushiTexto">
                    <b>Ohashi</b>
                    <p>Comida Japonesa</p>
                </div>
            </div>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="linksNav navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./sections/entradas.html">Entradas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./sections/especialidades.html">Especialidades</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./sections/postres.html">Postres</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./sections/contacto.html">Contacto</a>
                    </li>
                </ul>
                
                <CartWidget/>

            </div>

        </div>

    </nav>

    )

}

export default NavBar
