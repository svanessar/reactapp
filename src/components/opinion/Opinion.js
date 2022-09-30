import './Opinion.css';
import hombre from './opinioneshombre.png';
import mujer from './opinionesmujer.png';
function  Opinion(){
    return(
        <section id="opinion">
            <div class="usuarios">
                <h1><br/>nuestros usuarios dicen...<br/><br/></h1>
            </div><br/><br/><br/><br/><br/>
            <div class="carrusel">
            <div class="cajas ">
                
            <div class="caja ">
               
                <div class="union">
                <img class="opinionimg" src={hombre} alt=""/></div>
                
                <div class="nombre">
                    <h3>Diego Rodrigez</h3>
                
                <div class="estrellas">
                    
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i></div></div>
                <div>
                <p><br></br>Lorem ipsum dolor sit amet consectetur
                     adipisicing elit.Blanditiis 
                     vitae repudiandae eius provident consectetur cumque.</p></div>
                    </div>
                     <div class="caja ">
                <div class="union">
                <img  class="opinionimg" src={mujer} alt=""/>
                </div>
                <div class="nombre">
                <h3>Diana Garcia</h3>
            <div class="estrellas">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i></div></div>
            <p>Lorem ipsum dolor sit amet consectetur
                adipisicing elit.Blanditiis magnam 
                et  vitae repudiandae eius provident consectetur cumque.</p></div>
                <div class="caja "><div class="union">
                    <img class="opinionimg" src={hombre} alt=""/></div>
                    
                    <div class="nombre">
                        <h3>Diego Rodrigez</h3>
                    
                    <div class="estrellas">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i></div></div>
                    <p>Lorem ipsum dolor sit amet consectetur
                         adipisicing elit.Blanditiis magnam 
                         et 
                         vitae repudiandae eius provident consectetur cumque.</p></div>
          
          <ul class="puntos">
            <li class="punto activo"></li>
            <li class="punto"></li>
            <li class="punto"></li>
          </ul>
            </div>
            </div>
        </section>
)};
export default Opinion;