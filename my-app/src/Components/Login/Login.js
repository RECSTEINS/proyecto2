import "./../Home/global.css";
import "./login.css";
import LOGO from "../../Components/Home/imag/LOGO.png";
import FACEB from "../../Components/Home/imag/Iconos/Iconos/Face.png";
import Insta from "../../Components/Home/imag/Iconos/Iconos/Insta.png";
import WhatsApp from "../../Components/Home/imag/Iconos/Iconos/WhatsApp.png";
import X from "../../Components/Home/imag/Iconos/Iconos/X.png";
import Footer from "../../Components/Home/imag/FOOTER/FOOTER.png";
import axolo from "../../Components/Home/imag/lgaxolotl.png";
import Swal from "sweetalert2"; 
import { Link } from "react-router-dom";

function Login() {
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        try {
            const response = await fetch("http://localhost:7777/login", {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
            
                Swal.fire({
                    title: "Inicio de Sesión Exitoso",
                    text: data.message,
                    icon: "success",
                    confirmButtonText: "Aceptar",
                }).then(() => {
                    window.location.href = "/dashboard";
                });
            } else {
              
                Swal.fire({
                    title: "Error",
                    text: data.message,
                    icon: "error",
                    confirmButtonText: "Aceptar",
                });
            }
        } catch (error) {
            console.error("Error al iniciar sesión:", error);
   
            Swal.fire({
                title: "Error",
                text: "Ocurrió un error. Por favor, intenta de nuevo más tarde.",
                icon: "error",
                confirmButtonText: "Aceptar",
            });
        }
    };

    return (
        <>
            <div className="login-page">
                <header className="barra-de-navegacin2">
                    <div className="logo1" id="logoContainer">
                        <Link to={"/"}>
                        <img
                            className="logo-icon2"
                            loading="lazy"
                            alt="logo"
                            src={LOGO}
                        />
                        </Link>
                    </div>
                    <nav className="navigation-links">
                        <div className="inicio-wrapper" id="frameContainer">
                            <Link to={"/"}>
                                <a className="inicio2">INICIO</a>
                            </Link>
                        </div>
                        <div className="men-wrapper" id="frameContainer1">
                            <a className="men5">MENÚ</a>
                        </div>
                        <div className="reservacin-wrapper" id="frameContainer2">
                            <Link to={"/reservacion"}>
                                <a className="reservacin4">RESERVACIÓN</a>
                            </Link>
                        </div>
                        <div className="contacto-wrapper" id="frameContainer3">
                            <Link to={"/menu"}>
                                <a className="contacto2">CONTACTO</a>
                            </Link>
                        </div>
                    </nav>
                </header>
                <main className="content-login">
                    <section className="hero">
                        <div className="hero-container">
                            <form className="login-form" onSubmit={handleSubmit}>
                                <h1 className="login-title">Iniciar Sesión</h1>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="form-input"
                                        placeholder="usuario@ejemplo.com"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password" className="form-label">Contraseña</label>
                                    <input
                                        type="password"
                                        id="password"
                                        className="form-input"
                                        placeholder="********"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="submit-button">Iniciar Sesión</button>
                                </div>
                            </form>
                        </div>
                    </section>
                    <section className="footer">
                        <img
                            className="image-66-icon"
                            loading="lazy"
                            alt=""
                            src="./public/image-66@2x.png"
                        />
                        <div className="atencion-al-cliente-container">
                            <span className="atencion-al-cliente-container1">
                                <p className="atencion-al-cliente">Atencion al cliente:</p>
                                <p className="p1">988-427-0589</p>
                            </span>
                        </div>
                        <div className="whatsapp-parent">
                            <img className="whatsapp-icon" alt="" src={WhatsApp} />
                            <img className="insta-icon" alt="" src={Insta} />
                            <img className="vector-icon25" alt="" src={FACEB} />
                            <img className="vector-icon26" alt="" src={X} />
                        </div>
                        <div className="footer1">
                            <div className="copyright">Copyright</div>
                            <div className="poltica-de-privacidad">
                                Política de privacidad y términos de servicio.
                            </div>
                            <div className="certificaciones-de-seguridad">
                                Certificaciones de seguridad
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </>
    );
}

export default Login;
