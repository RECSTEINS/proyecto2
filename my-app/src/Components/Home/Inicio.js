import "./index.css";
import "./global.css"
import "../Seccion/css/styles.css"
import Logo from "./imag/LOGO.png";
import lgaxolotl from "./imag/lgaxolotl.png";
import { Link } from "react-router-dom"


import image90 from "./imag/image 90.png";
import image901 from "./imag/image 901.png";
import imagen3 from "./imag/imagen.3.png";
import Imagen1 from "./imag/Imagen1.png";
import Imagen2 from "./imag/Imagen2.png";
import Imagen4 from "./imag/Imagen4.png";

// Platillos - Color
import Imagen9 from "./imag/HOME/PLATILLOS/COLOR/Imagen9.png";
import Imagen10 from "./imag/HOME/PLATILLOS/COLOR/Imagen10.png";
import Imagen11 from "./imag/HOME/PLATILLOS/COLOR/Imagen11.png";
import Imagen12 from "./imag/HOME/PLATILLOS/COLOR/Imagen12.png";

// Platillos - Oscuros
import Imagen5 from "./imag/HOME/PLATILLOS/OSCUROS/Imagen5.png";
import Imagen6 from "./imag/HOME/PLATILLOS/OSCUROS/Imagen6.png";
import Imagen7 from "./imag/HOME/PLATILLOS/OSCUROS/Imagen7.png";
import Imagen8 from "./imag/HOME/PLATILLOS/OSCUROS/Imagen8.png";
import Imagen13 from "./imag/HOME/PLATILLOS/Imagen13.png";

// Reseñas
import Imagen14 from "./imag/HOME/Imagen14.png";
import Imagen15 from "./imag/HOME/Imagen15.png";

// Menu
import Bebidas from "./imag/MENU/BEBIDAS.png";
import Cocteles from "./imag/MENU/COCTELES.png";
import Entradas from "./imag/MENU/ENTRADAS.png";
import Platillos from "./imag/MENU/PALTILLOS.png";
import Postres from "./imag/MENU/POSTRES.png";

//Reseñas
import RE1 from "./imag/HOME/Reseñas/Reseñas/RE1.png";
import RE2 from "./imag/HOME/Reseñas/Reseñas/RE2.png";
import RE3 from "./imag/HOME/Reseñas/Reseñas/RE3.png";
import RE4 from "./imag/HOME/Reseñas/Reseñas/RE4.png";
import RE5 from "./imag/HOME/Reseñas/Reseñas/RE5.png";
import Estrella from "./imag/HOME/Reseñas/Reseñas/Estreñas Completa.png"
import EstrellaMedia from "./imag/HOME/Reseñas/Reseñas/Estreñas media.png"


//Iconos
import FACEB from "./imag/Iconos/Iconos/Face.png";
import Insta from "./imag/Iconos/Iconos/Insta.png";
import WhatsApp from "./imag/Iconos/Iconos/WhatsApp.png";
import X from "./imag/Iconos/Iconos/X.png";

//Seccio
import img from "../Seccion/images/1.jpg";
import img2 from "../Seccion/images/2.jpg";
import img3 from "../Seccion/images/3.jpg";
import img4 from "../Seccion/images/4.jpg";

function Inicio() {

    return (
        <div class="resolucion">
            <div class="home">
                <header class="barra-de-navegacin">
                    <div class="logo">
                        <Link to={"/"}>
                            <img class="logo-icon" alt=" " src={Logo} />
                        </Link>
                    </div>
                    <nav class="nav-links">
                        <div class="nav-link-items">
                            <Link to={"/"}>
                                <a class="inicio">INICIO</a>
                            </Link>
                        </div>
                        <div class="nav-link-items1" id="navLinkItems1">
                            <Link to={"/menu"}>
                                <a class="men">MENÚ</a>
                            </Link>
                        </div>
                        <div class="nav-link-items2" id="navLinkItems2">
                            <Link to={"/reservacion"}>
                                <a class="reservacin">RESERVACIÓN</a>
                            </Link>
                        </div>
                        <div class="nav-link-items3" id="navLinkItems3">
                            <Link to={"/login"}>
                                <a class="contacto">Login</a>
                            </Link>
                        </div>
                    </nav>
                </header>
                <main class="secciones">

                    <section class="seccin-1">

                        <div class="image-76-parent">
                            <div class="lgaxolotl">
                                <img class="logtext" alt=" " src={lgaxolotl} />
                            </div>
                            <div class="cuisine-title">
                                <div class="cocina">cocina</div>
                                <h1 class="mexicana">Mexicana</h1>
                            </div>
                            <div class="bienvenido-a-axolotl-container">
                                <p class="bienvenido-a-axolotl">
                                    Bienvenido a AXOLOTL, donde la tradición se convierte en arte
                                    culinario.
                                </p>
                                <p class="descubre-el-sabor">
                                    Descubre el sabor auténtico de la cocina mexicana, donde
                                    tradición y creatividad se encuentran.
                                </p>
                            </div>
                            <div class="cuisine-actions">
                                <button class="boton-reserva-7">
                                    <div class="reservar-ahora">RESERVAR AHORA</div>
                                </button>
                                <div class="boton-men-1">
                                    <div class="men1">MENÚ</div>
                                </div>
                            </div>
                        </div>
                        <div class="img">
                            <img src={Imagen1} alt="platillo incial" style={{ width: "100%", height: "100%" }} />
                        </div>
                    </section>

                    <section class="seccin-7">
                        <div class="hero-image">
                            <img class="chefs" alt=" " src={Imagen2} />
                        </div>
                        <div class="origen">
                            <h1 class="origen1">Origen</h1>
                            <div class="los-hermanos-hernndez">
                                Los hermanos Hernández descubrieron su pasión por la alta cocina
                                inspirados por los ricos sabores de México. Así nació Axolotl, un
                                restaurante que no solo celebra la gastronomía, sino que la eleva
                                a una forma de arte. Cada plato es una fusión perfecta de
                                autenticidad y elegancia, diseñado para cautivar tus sentidos. Ven
                                y sumérgete en una experiencia sensorial que honra nuestras raíces
                                mientras trasciende el tiempo.
                            </div>
                        </div>
                    </section>

                    <section class="hero-content">
                        <div class="image-wrapper">
                            <img class="imagen3" alt=" " src={imagen3} />
                        </div>
                        <div class="especialidad-de-los-hermanos-h-wrapper">
                            <h1 class="especialidad-de-los">
                                Especialidad de los Hermanos Hernández
                            </h1>
                        </div>
                        <div class="contact">
                            <div class="whatsapp">
                                <div class="los-hermanos-hernndez1">
                                    Los hermanos Hernández capturan la esencia de México, utilizando
                                    ingredientes frescos y técnicas de alta cocina. Esta
                                    especialidad combina el delicado sabor del camarón con la
                                    frescura del aguacate, todo realzado por un toque de especias
                                    que despiertan los sentidos.
                                </div>
                                <div class="una-obra-culinaria">
                                    Una obra culinaria que fusiona tradición y creatividad. Este
                                    platillo es un homenaje a las raíces mexicanas, reinventado con
                                    elegancia para ofrecer una experiencia gastronómica única que
                                    refleja la pasión y dedicación de los hermanos Hernández.
                                </div>
                            </div>
                            <div class="instagram">
                                <div class="instagram-content">
                                    <div class="una-creacin-con">
                                        Una creación con amor por los hermanos Hernández.
                                    </div>
                                    <i class="explora-todos-los"
                                    >Explora todos los sabores únicos que Axolotl tiene para
                                        ti.</i
                                    >
                                </div>
                                <div class="botn-men">
                                    <div class="men2">MENÚ</div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section class="seccin-12">
                        <div class="image4">
                            <img class="imagen4" alt=" " src={Imagen4} />
                        </div>
                        <div class="ambiance-content">
                            <div class="ambiance-title">
                                <h1 class="espacio-para-el">Espacio para el Lujo</h1>

                                <div class="en-axolotl-el">
                                    En Axolotl, el ambiente refleja la sofisticación de nuestros
                                    platillos... Con un diseño contemporáneo inspirado en la fauna
                                    mexicana, creamos un entorno acogedor y vanguardista.
                                </div>
                            </div>

                            <div class="ambiance-experience">
                                <div class="experience-title">
                                    <h3 class="un-viaje-sensorial">Un Viaje Sensorial</h3>
                                    <div class="sumrgete-en-una">
                                        Sumérgete en una experiencia donde cada detalle está
                                        cuidadosamente pensado para deleitar tus sentidos. En Axolotl,
                                        fusionamos la esencia de la tradición mexicana con un diseño
                                        moderno, creando un espacio único para disfrutar momentos que
                                        se quedarán grabados en tu memoria.
                                    </div>
                                </div>

                                <button class="boton-reserva-3">
                                    <div class="reservar-ahora1">RESERVAR AHORA</div>
                                </button>
                            </div>
                        </div>
                    </section>




                    <div class="container-custom">
        <div class="row">
        
            <div class="col-md-1 platillos-title">
                PLATILLOS
            </div>
     
            <div class="col-md-11 d-flex">
                <div class="platillo-img">
                    <img src={img} alt="Platillo 1"/>
                </div>
                <div class="platillo-img">
                    <img src={img2} alt="Platillo 2"/>
                </div>
                <div class="platillo-img">
                    <img src={img3}  alt="Platillo 3"/>
                </div>
                <div class="platillo-img">
                    <img src={img4}  alt="Platillo 4"/>
                </div>
            </div>
        </div>
    </div>








                    <section class="seccin-6">
                        <div class="texto">
                            <h1 class="el-arte-de">El Arte de la Mixología</h1>
                            <div class="nuestro-mixlogo-combina-container">
                                <span>
                                    <p class="nuestro-mixlogo-combina">
                                        Nuestro mixólogo combina técnica, creatividad y pasión para
                                        crear bebidas que son auténticas obras de arte. Cada copa
                                        cuenta una historia, diseñada para deleitar tus sentidos y
                                        elevar tu experiencia.
                                    </p>
                                    <p class="blank-line">&nbsp;</p>
                                    <p class="en-the-axolotl">
                                        En “The Axolotl”, cada detalle en nuestras bebidas está
                                        inspirado en los sabores y tradiciones de México, utilizando
                                        ingredientes frescos, locales y de la más alta calidad. Desde
                                        cócteles clásicos con un giro único hasta creaciones
                                        originales, cada bebida es una celebración de la riqueza
                                        cultural y la innovación contemporánea.
                                    </p>
                                </span>
                            </div>
                        </div>
                        <img
                            class="image-89-icon"
                            loading="lazy"
                            alt=""
                            src={Imagen14}
                        />
                    </section>
                    <section class="food-revolution">
                        <div class="revolution-content">
                            <img
                                class="n-icon"
                                loading="lazy"
                                alt=""
                                src={Imagen15}
                            />

                            <div class="revolution-description">
                                <div class="revolution-title">
                                    <h1 class="revolucin-a-la">Revolución a la buena comida</h1>
                                    <div class="autenticidad-y-excelencia">
                                        Autenticidad y excelencia en cada bocado
                                    </div>
                                </div>
                                <div class="en-the-axolotl-container">
                                    <span>
                                        <p class="en-the-axolotl1">
                                            En “The Axolotl”, celebramos la perfección culinaria al
                                            formar parte de un selecto grupo de restaurantes reconocidos
                                            internacionalmente. Gracias a la prestigiosa distinción de
                                            la Cabeza Dorada otorgada por la Kobe Beef Federation,
                                            ofrecemos carne Kobe 100% auténtica, una experiencia única
                                            que combina calidad, tradición y sabor inigualable.
                                        </p>
                                        <p class="blank-line1">&nbsp;</p>
                                        <p class="sumrgete-en-un">
                                            Sumérgete en un viaje gastronómico exclusivo, donde la
                                            autenticidad y la excelencia se reflejan en cada platillo.
                                            Descubre por qué somos la elección predilecta de los amantes
                                            de la alta cocina en todo el mundo.
                                        </p>
                                    </span>
                                </div>
                                <div class="boton-men-2">
                                    <div class="men3">MENÚ</div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="seccin-61">
                        <h1 class="reseas">Reseñas</h1>
                        <div class="tarjeta-de-calificacion-1-parent">
                            <div class="tarjeta-de-calificacion-1">
                                <div class="perfil">
                                    <div class="profile-containers">
                                        <img
                                            class="profile-pictures-icon"
                                            loading="lazy"
                                            alt=""
                                            src={RE1}
                                        />

                                        <div class="nombre-y-rating">
                                            <div class="andrs-villanueva">Andrés Villanueva</div>
                                            <div class="review-ratings">
                                                <div class="rating-placeholder">4.5</div>
                                                <div class="estrellas">
                                                    <img
                                                        class="star-icon"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="star-icon1"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="star-icon2"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="star-icon3"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="star-icon4"
                                                        alt=""
                                                        src={EstrellaMedia}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="cada-platillo-es">
                                    "Cada platillo es una obra de arte que refleja la auténtica
                                    esencia de la cocina mexicana.”
                                </div>
                            </div>
                            <div class="tarjeta-de-calificacion-3">
                                <div class="perfil1">
                                    <div class="ellipse-parent">
                                        <img
                                            class="frame-child"
                                            loading="lazy"
                                            alt=""
                                            src={RE2}
                                        />

                                        <div class="nombre-y-rating1">
                                            <div class="carla-jimnez">Carla Jiménez</div>
                                            <div class="parent">
                                                <div class="div">5.0</div>
                                                <div class="estrellas1">
                                                    <img
                                                        class="vector-icon"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon1"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon2"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon3"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon4"
                                                        alt=""
                                                        src={Estrella}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <blockquote class="una-experiencia-culinaria">
                                    "Una experiencia culinaria única. Definitivamente el mejor
                                    restaurante mexicano en el que he estado."
                                </blockquote>
                            </div>
                            <div class="tarjeta-de-calificacion-2">
                                <div class="perfil2">
                                    <div class="ellipse-group">
                                        <img
                                            class="frame-item"
                                            loading="lazy"
                                            alt=""
                                            src={RE3}
                                        />

                                        <div class="nombre-y-rating2">
                                            <div class="mario-torres">Mario Torres</div>
                                            <div class="group">
                                                <div class="div1">4.5</div>
                                                <div class="estrellas2">
                                                    <img
                                                        class="vector-icon5"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon6"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon7"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon8"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon9"
                                                        alt=""
                                                        src={Estrella}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="los-platillos-no">
                                    Los platillos no solo son deliciosos, sino también visualmente
                                    impresionantes."
                                </div>
                            </div>
                            <div class="tarjeta-de-calificacion-11">
                                <div class="perfil3">
                                    <div class="ellipse-container">
                                        <img
                                            class="frame-inner"
                                            alt=""
                                            src={RE4}
                                        />

                                        <div class="nombre-y-rating3">
                                            <div class="laura-ruiz">Laura Ruiz</div>
                                            <div class="container">
                                                <div class="div2">4.0</div>
                                                <div class="estrellas3">
                                                    <img
                                                        class="vector-icon10"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon11"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon12"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon13"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon14"
                                                        alt=""
                                                        src={Estrella}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 
                                </div>
                                <blockquote class="el-ambiente-es">
                                    "El ambiente es acogedor y la comida es deliciosa, aunque me
                                    hubiera gustado un poco más de variedad en el menú."
                                </blockquote>
                            </div>
                            <div class="tarjeta-de-calificacion-31">
                                <div class="perfil4">
                                    <div class="frame-div">
                                        <img
                                            class="ellipse-icon"
                                            alt=""
                                            src={RE5}
                                        />

                                        <div class="nombre-y-rating4">
                                            <div class="fernando-lpez">Fernando López</div>
                                            <div class="parent1">
                                                <div class="div3">5.0</div>
                                                <div class="estrellas4">
                                                    <img
                                                        class="vector-icon15"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon16"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon17"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon18"
                                                        alt=""
                                                        src={Estrella}
                                                    />

                                                    <img
                                                        class="vector-icon19"
                                                        alt=""
                                                        src={EstrellaMedia}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                <blockquote class="la-calidad-de">
                                    "La calidad de los ingredientes y la presentación son
                                    espectaculares."
                                </blockquote>
                            </div>
                            
                        </div>
                    </section>
                    <form class="form-container-parent">
                        <div class="form-container">
                            <h1 class="reservacin1">Reservación</h1>
                            <div class="reserva-la-experiencia">
                                Reserva la experiencia culinaria exclusiva que ofrecen los
                                Hermanos Hernández, Leonel y Diego, chefs expertos en cocina
                                mexicana y fundadores de AXOLOTL.
                            </div>
                            <div class="form-fields">
                                <div class="celda">
                                    <div class="campo-de-texto">
                                        <div class="label">
                                            <div class="nombre-completo">Nombre completo</div>
                                        </div>
                                        <div class="contenedor">
                                            <input
                                                class="nombre-completo1"
                                                placeholder="Nombre completo"
                                                type="text"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="celda1">
                                    <div class="campo-de-texto1">
                                        <div class="label1">
                                            <div class="personas">Personas</div>
                                        </div>
                                        <input
                                            class="contenedor1"
                                            placeholder="2, 4..."
                                            type="text"
                                        />
                                    </div>
                                    <div class="campo-de-texto2">
                                        <div class="label2">
                                            <div class="correo-electrnico">Correo electrónico</div>
                                        </div>
                                        <input
                                            class="contenedor2"
                                            placeholder="reservas@axolotl.com.mx"
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="celda2">
                                <div class="campo-de-texto3">
                                    <div class="label3">
                                        <div class="fecha">Fecha</div>
                                    </div>
                                    <input
                                        class="contenedor3"
                                        placeholder="DD/MM/AAAA"
                                        type="text"
                                    />
                                </div>
                                <div class="campo-de-texto4">
                                    <div class="label4">
                                        <div class="hora">Hora</div>
                                    </div>
                                    <input class="contenedor4" placeholder="00:00" type="text" />
                                </div>
                                <div class="celda3">
                                    <div class="campo-de-texto5">
                                        <div class="label5">
                                            <div class="tienes-un-evento">
                                                ¿Tienes un evento especial? Háznoslo saber
                                            </div>
                                        </div>
                                        <input
                                            class="contenedor5"
                                            placeholder="Cumpleaños, Junta, etc..."
                                            type="text"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button class="boton-enviar">
                            <div class="enviar">Enviar</div>
                        </button>
                        <div class="asegura-tu-lugar">
                            ¡Asegura tu lugar y vive una celebración única de la alta cocina
                            mexicana!
                        </div>
                    </form>
                    <section class="footer">
                        <img
                            class="image-66-icon"
                            loading="lazy"
                            alt=""
                            src="./public/image-66@2x.png"
                        />

                        <div class="atencion-al-cliente-container">
                            <span class="atencion-al-cliente-container1">
                                <p class="atencion-al-cliente">Atencion al cliente:</p>
                                <p class="p1">988-427-0589</p>
                            </span>
                        </div>
                        <div class="whatsapp-parent">
                            <img class="whatsapp-icon" alt="" src={WhatsApp} />

                            <img class="insta-icon" alt="" src={Insta} />

                            <img class="vector-icon25" alt="" src={FACEB} />

                            <img class="vector-icon26" alt="" src={X} />
                        </div>
                        <div class="footer1">
                            <div class="copyright">Copyright</div>
                            <div class="poltica-de-privacidad">
                                Política de privacidad y términos de servicio.
                            </div>
                            <div class="certificaciones-de-seguridad">
                                Certificaciones de seguridad
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default Inicio;