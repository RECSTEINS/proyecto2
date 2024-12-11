import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Mesas from "../Mesas/Mesas.js";
import Reservacion from "../Home/reservacin.js";
import Reservaciones from "../Reserva/Reservaciones.js";

function InicioAdmin(){
    const [activeView, setActiveView] = useState("inicio");

    const handleViewChange = (view) => {
        setActiveView(view);
    };

    const renderContent = () => {
        switch (activeView) {
            case "inicio":
                return <div className="content">Bienvenido al Dashboard</div>;
            case "perfil":
                return <Reservaciones/>
            case "reportes":
                return <Mesas/>
            default:
                return <div className="content">Selecciona una opción</div>;
        }
    };

    return (
        <div className="dashboard-container">
            {/* Panel Izquierdo */}
            <aside className="sidebar">
                <h2 className="sidebar-title">Panel</h2>
                <ul className="sidebar-menu">
                    <li
                        className={`menu-item ${activeView === "inicio" ? "active" : ""}`}
                        onClick={() => handleViewChange("inicio")}
                    >
                        Inicio
                    </li>
                    <li
                        className={`menu-item ${activeView === "perfil" ? "active" : ""}`}
                        onClick={() => handleViewChange("perfil")}
                    >
                        Reservaciones
                    </li>
                    <li
                        className={`menu-item ${activeView === "reportes" ? "active" : ""}`}
                        onClick={() => handleViewChange("reportes")}
                    >
                        Mesas
                    </li>
                    <li className="menu-item">
                        <Link to={"/login"}>
                            <a className="logout-link">
                                Cerrar Sesión
                            </a>
                        </Link>
                    </li>
                </ul>
            </aside>

            {/* Contenido Principal */}
            <main className="main-content">
                <header className="dashboard-header">
                    <h1>Dashboard</h1>
                </header>
                <section className="dashboard-body">{renderContent()}</section>
            </main>
        </div>
    )
}

export default InicioAdmin;