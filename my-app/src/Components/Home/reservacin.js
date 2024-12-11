import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import emailjs from '@emailjs/browser';
import "./global.css";
import "./reservacin.css";
import LOGO from "./imag/LOGO.png";
import { Link } from "react-router-dom";
import reservaiMG from "./imag/RESERVACION/Imagen28.png";
import Footer from "./imag/FOOTER/FOOTER.png";

function Reservacion() {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        numero_personas: "",
        fecha: "",
        hora: "",
        comentarios: "",
        fk_mesa: "",
    });

    const [mesas, setMesas] = useState([]);

    useEffect(() => {
        const fetchMesas = async () => {
            try {
                const response = await fetch("http://localhost:7777/get-mesas");
                const data = await response.json();
                if (response.ok) {
                    setMesas(data.data);
                } else {
                    console.error("Error al obtener las mesas:", data.message);
                }
            } catch (error) {
                console.error("Error en el servidor:", error);
            }
        };

        fetchMesas();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const enviarCorreoYReservacion = async () => {
        try {
            console.log("Datos enviados:", JSON.stringify(formData));
    
            // Validación de los campos
            if (
                !formData.nombre ||
                !formData.email ||
                !formData.numero_personas ||
                !formData.fecha ||
                !formData.hora 
            ) {
                Swal.fire("Error", "Por favor completa todos los campos obligatorios.", "error");
                return;
            }
    
            const templateParams = {
                to_name: formData.nombre,
                to_email: formData.email,
                from_name: "Axolotl",
                fecha: formData.fecha,
                hora: formData.hora,
                numero_personas: formData.numero_personas,
                mesa: formData.fk_mesa,
                comentarios: formData.comentarios || "Sin comentarios",
            };
    
            // Enviar correo con EmailJS
            const emailResponse = await emailjs.send(
                "service_5a5wafe",
                "template_2tn11al",
                templateParams,
                "0ZXxd3vrHALtJQVWV"
            );
    
            if (emailResponse.status === 200) {
                console.log("Correo enviado correctamente");
                // Si el correo se envió, guardar en la base de datos
                const response = await fetch("http://localhost:7777/agregar-reservacion", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    const responseData = await response.json();
                    console.log("Respuesta del servidor:", responseData);
                    Swal.fire("Éxito", "Reservación realizada exitosamente.", "success");
                } else {
                    const errorData = await response.json();
                    console.error("Error en la base de datos:", errorData);
                    Swal.fire("Error", "No se pudo guardar la reservación en la base de datos.", "error");
                }
            } else {
                console.error("Error al enviar el correo:", emailResponse);
                Swal.fire("Error", "No se pudo enviar el correo de confirmación.", "error");
            }
        } catch (error) {
            console.error("Error general:", error);
            Swal.fire("Error", "Ocurrió un error. Por favor, intenta de nuevo más tarde.", "error");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        enviarCorreoYReservacion();
    };

    return (
        <div className="reservacin3">
            <header className="barra-de-navegacin2">
                <div className="logo1" id="logoContainer">
                    <Link to={"/inicio"}>
                        <img className="logo-icon" alt=" " src={LOGO} />
                    </Link>
                </div>
                <nav className="navigation-links">
                    <div className="inicio-wrapper" id="frameContainer">
                        <Link to={"/inicio"}>
                             <a className="inicio2">INICIO</a>
                        </Link>
                    </div>
                    <div className="men-wrapper" id="frameContainer1">
                        <Link to={"/menu"}>  
                            <a className="men5">MENÚ</a>
                        </Link>
                    </div>
                    <div className="reservacin-wrapper" id="frameContainer2">
                        <Link to={"/reservacion"}>
                            <a className="reservacin4">RESERVACIÓN</a>
                        </Link>
                    </div>
                    <div className="contacto-wrapper" id="frameContainer3">
                        <Link to={"/login"}>
                            <a className="contacto2">Login</a>
                        </Link>
                    </div>
                </nav>
            </header>
            <main className="content">
                <section className="hero">
                    <div className="hero-container">
                        <form className="reservation-form" onSubmit={handleSubmit}>
                            <h1 className="reservacin5">Reservación</h1>
                            <div className="celda4">
                                <div className="campo-de-texto6">
                                    <label>Nombre completo</label>
                                    <input
                                        className="field-placeholders"
                                        placeholder="Nombre completo"
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleChange}
                                        required
                                        style={{color: "white"}}
                                    />
                                </div>
                            </div>
                            <div className="celda7">
                                <div className="campo-de-texto11">
                                    <label>Correo electrónico</label>
                                    <input
                                        className="texto4"
                                        placeholder="reservas@axolotl.com.mx"
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        style={{color: "white"}}
                                    />
                                </div>
                            </div>
                            <div className="celda5">
                                <div className="campo-de-texto7">
                                    <label>Personas</label>
                                    <input
                                        className="texto1"
                                        placeholder="2, 4..."
                                        type="number"
                                        name="numero_personas"
                                        value={formData.numero_personas}
                                        onChange={handleChange}
                                        required
                                        style={{color: "white"}}
                                    />
                                </div>
                            </div>
                            <div className="celda6">
                                <div className="campo-de-texto9">
                                    <label>Fecha</label>
                                    <input
                                        className="texto2"
                                        type="date"
                                        name="fecha"
                                        value={formData.fecha}
                                        onChange={handleChange}
                                        required

                                        style={{color: "white"}}
                                    />
                                </div>
                                <div className="campo-de-texto10">
                                    <label>Hora</label>
                                    <input
                                        className="texto3"
                                        type="time"
                                        name="hora"
                                        value={formData.hora}
                                        onChange={handleChange}
                                        required
                                        style={{color: "white"}}
                                    />
                                </div>
                            </div>
                            <div className="celda5">
                                <div className="campo-de-texto8">
                                    <label>Mesa</label>
                                    <select
                                        className="field-placeholders1"
                                        name="fk_mesa"
                                        value={formData.fk_mesa}
                                        onChange={handleChange}
                                        required
                                        style={{color: "white"}}
                                    >
                                        <option value="">Seleccione una mesa</option>
                                        {mesas.map((mesa) => (
                                            <option key={mesa.id} value={mesa.id}>
                                                Mesa {mesa.id} - {mesa.ubicacion} ({mesa.capacidad} personas)
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="celda8">
                                <div className="campo-de-texto12">
                                    <label>Comentarios</label>
                                    <input
                                        className="texto5"
                                        placeholder="Cumpleaños, Junta, etc..."
                                        type="text"
                                        name="comentarios"
                                        value={formData.comentarios}
                                        onChange={handleChange}
                                        style={{color: "white"}}
                                    />
                                </div>
                            </div>
                            <div className="reservation-button">
                                <button className="boton" type="submit">
                                    Enviar
                                </button>
                            </div>
                        </form>
                        <div className="hero-container-inner">
                            <img
                                className="frame-icon"
                                loading="lazy"
                                alt=""
                                src={reservaiMG}
                            />
                        </div>
                    </div>
                    <div className="background-image">
                        <img
                            className="image-66-icon2"
                            loading="lazy"
                            alt=""
                            src={Footer}
                        />
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Reservacion;
