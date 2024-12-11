import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from '@emailjs/browser';

import "../Dashboard/dashboard.css";

function Reservaciones() {
    const [reservaciones, setReservaciones] = useState([]);
    const [mesas, setMesas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentReservacion, setCurrentReservacion] = useState(null);
    const [newReservacion, setNewReservacion] = useState({
        nombre: "",
        numero_personas: "",
        fecha: "",
        hora: "",
        comentarios: "",
        fk_mesa: "",
        email: "", // Campo de cor
    });

    useEffect(() => {
        const fetchReservaciones = async () => {
            try {
                const response = await fetch("http://localhost:7777/get-reservaciones");
                const data = await response.json();
                if (response.ok) {
                    setReservaciones(data.data);
                } else {
                    console.error("Error al obtener las reservaciones:", data.message);
                }
            } catch (error) {
                console.error("Error en el servidor:", error);
            } finally {
                setLoading(false);
            }
        };

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

        fetchReservaciones();
        fetchMesas();
    }, []);

    const eliminarReservacion = async (id) => {
        Swal.fire({
            title: "¿Estás seguro?",
            text: "No podrás revertir esto.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí, eliminar",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:7777/delete-reservacion/${id}`, {
                        method: "DELETE",
                    });
                    if (response.ok) {
                        setReservaciones((prev) => prev.filter((reservacion) => reservacion.id !== id));
                        Swal.fire("Eliminado!", "La reservación ha sido eliminada.", "success");
                    } else {
                        const data = await response.json();
                        Swal.fire("Error!", "Error al eliminar la reservación: " + data.message, "error");
                    }
                } catch (error) {
                    console.error("Error al eliminar la reservación:", error);
                    Swal.fire("Error!", "Ocurrió un error. Por favor, intenta de nuevo más tarde.", "error");
                }
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewReservacion({ ...newReservacion, [name]: value });
    };

    const enviarEmailConfirmacion = async () => {
        try {
            const templateParams = {
                to_name: newReservacion.nombre,
                to_email: newReservacion.email,
                from_name: "The Axolotl", 
                fecha: newReservacion.fecha,
                hora: newReservacion.hora, 
                mesa: `Mesa ${newReservacion.fk_mesa}`,
                numero_personas: newReservacion.numero_personas,
            };
    
            const result = await emailjs.send(
                'service_5a5wafe', 
                'template_2tn11al', 
                templateParams,
                '0ZXxd3vrHALtJQVWV' 
            );
    
            if (result.status === 200) {
                Swal.fire("Éxito!", "Se ha enviado un correo de confirmación.", "success");
                return true;
            } else {
                Swal.fire("Error!", "Error al enviar el correo. Inténtalo más tarde.", "error");
                return false;
            }
        } catch (error) {
            console.error("Error al enviar el correo:", error);
            Swal.fire("Error!", "Ocurrió un error al enviar el correo.", "error");
            return false;
        }
    };
    
    const agregarReservacion = async () => {
        const emailEnviado = await enviarEmailConfirmacion();
    
        if (!emailEnviado) return;
    
        try {
            const response = await fetch("http://localhost:7777/agregar-reservacion", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReservacion),
            });
    
            if (response.ok) {
                const data = await response.json();
                setReservaciones((prev) => [...prev, { id: data.reservacionId, ...newReservacion }]);
                Swal.fire("Éxito!", "Reservación agregada exitosamente.", "success");
                setShowModal(false);
            } else {
                const errorData = await response.json();
                Swal.fire("Error!", "Error al agregar la reservación: " + errorData.message, "error");
            }
        } catch (error) {
            console.error("Error al agregar reservación:", error);
            Swal.fire("Error!", "Ocurrió un error. Por favor, intenta de nuevo más tarde.", "error");
        }
    };
    

    const editarReservacion = async () => {
        try {
            const response = await fetch(`http://localhost:7777/editar-reservacion/${currentReservacion.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newReservacion),
            });
            if (response.ok) {
                setReservaciones((prev) =>
                    prev.map((reservacion) =>
                        reservacion.id === currentReservacion.id ? { ...reservacion, ...newReservacion } : reservacion
                    )
                );
                Swal.fire("Éxito!", "Reservación editada exitosamente.", "success");
                setShowModal(false);
                setIsEditing(false);
            } else {
                const errorData = await response.json();
                Swal.fire("Error!", "Error al editar la reservación: " + errorData.message, "error");
            }
        } catch (error) {
            console.error("Error al editar reservación:", error);
            Swal.fire("Error!", "Ocurrió un error. Por favor, intenta de nuevo más tarde.", "error");
        }
    };

    const abrirEditarModal = (reservacion) => {
        setCurrentReservacion(reservacion);
        setNewReservacion({
            nombre: reservacion.nombre,
            numero_personas: reservacion.numero_personas,
            fecha: reservacion.fecha,
            hora: reservacion.hora,
            comentarios: reservacion.comentarios || "",
            fk_mesa: reservacion.mesa_id || "",
        });
        setIsEditing(true);
        setShowModal(true);
    };

    const columns = [
        { name: "ID", selector: (row) => row.id, sortable: true },
        { name: "Nombre", selector: (row) => row.nombre, sortable: true },
        { name: "Número de Personas", selector: (row) => row.numero_personas, sortable: true },
        { name: "Fecha", selector: (row) => row.fecha, sortable: true },
        { name: "Hora", selector: (row) => row.hora, sortable: true },
        {
            name: "Opciones",
            cell: (row) => (
                <div style={{ display: "flex", gap: "10px" }}>
                    <Button variant="warning" onClick={() => abrirEditarModal(row)}>
                        Editar
                    </Button>
                    <Button variant="danger" onClick={() => eliminarReservacion(row.id)}>
                        Eliminar
                    </Button>
                </div>
            ),
            width: '200px'
        },
    ];

    return (
        <div className="reservaciones-container">
            <h1 className="reservaciones-title">Listado de Reservaciones</h1>
            <Button
                variant="primary"
                onClick={() => {
                    setShowModal(true);
                    setIsEditing(false);
                }}
            >
                Agregar Reservación
            </Button>
            {loading ? <p>Cargando reservaciones...</p> : <DataTable columns={columns} data={reservaciones} pagination highlightOnHover striped />}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? "Editar Reservación" : "Agregar Reservación"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type="text" name="nombre" value={newReservacion.nombre} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
    <Form.Label>Correo Electrónico</Form.Label>
    <Form.Control
        type="email"
        name="email"
        value={newReservacion.email}
        onChange={handleInputChange}
        required
    />
</Form.Group>
                        <Form.Group>
                            <Form.Label>Número de Personas</Form.Label>
                            <Form.Control type="number" name="numero_personas" value={newReservacion.numero_personas} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type="date" name="fecha" value={newReservacion.fecha} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Hora</Form.Label>
                            <Form.Control type="time" name="hora" value={newReservacion.hora} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Mesa</Form.Label>
                            <Form.Control as="select" name="fk_mesa" value={newReservacion.fk_mesa} onChange={handleInputChange}>
                                <option value="">Seleccione una mesa</option>
                                {mesas.map((mesa) => (
                                    <option key={mesa.id} value={mesa.id}>
                                        Mesa {mesa.id} - {mesa.ubicacion} ({mesa.capacidad} personas)
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Comentarios</Form.Label>
                            <Form.Control type="text" name="comentarios" value={newReservacion.comentarios} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={isEditing ? editarReservacion : agregarReservacion}>
                        {isEditing ? "Guardar Cambios" : "Guardar"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Reservaciones;
