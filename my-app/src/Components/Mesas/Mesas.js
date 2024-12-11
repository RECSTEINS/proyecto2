import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";
import { Modal, Button, Form } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Dashboard/dashboard.css";

function Mesas() {
    const [mesas, setMesas] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [currentMesa, setCurrentMesa] = useState(null);
    const [newMesa, setNewMesa] = useState({ capacidad: "", disponibilidad: "", ubicacion: "" });

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
            } finally {
                setLoading(false);
            }
        };
        fetchMesas();
    }, []);

    const eliminarMesa = async (id) => {
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
                    const response = await fetch(`http://localhost:7777/delete-mesas/${id}`, {
                        method: "DELETE",
                    });
                    if (response.ok) {
                        setMesas((prevMesas) => prevMesas.filter((mesa) => mesa.id !== id));
                        Swal.fire("Eliminado!", "La mesa ha sido eliminada.", "success");
                    } else {
                        const data = await response.json();
                        Swal.fire("Error!", "Error al eliminar la mesa: " + data.message, "error");
                    }
                } catch (error) {
                    console.error("Error al eliminar la mesa:", error);
                    Swal.fire("Error!", "Ocurrió un error. Por favor, intenta de nuevo más tarde.", "error");
                }
            }
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewMesa({ ...newMesa, [name]: value });
    };

    const agregarMesa = async () => {
        try {
            const response = await fetch("http://localhost:7777/agregar-mesa", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newMesa),
            });
            if (response.ok) {
                const data = await response.json();
                setMesas((prevMesas) => [...prevMesas, { id: data.mesaId, ...newMesa }]);
                Swal.fire("Éxito!", "Mesa agregada exitosamente.", "success");
                setShowModal(false);
            } else {
                const errorData = await response.json();
                Swal.fire("Error!", "Error al agregar la mesa: " + errorData.message, "error");
            }
        } catch (error) {
            console.error("Error al agregar mesa:", error);
            Swal.fire("Error!", "Ocurrió un error. Por favor, intenta de nuevo más tarde.", "error");
        }
    };

    const editarMesa = async () => {
        try {
            const response = await fetch(`http://localhost:7777/editar-mesa/${currentMesa.id}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newMesa),
            });
            if (response.ok) {
                setMesas((prevMesas) => prevMesas.map((mesa) => (mesa.id === currentMesa.id ? { ...mesa, ...newMesa } : mesa)));
                Swal.fire("Éxito!", "Mesa editada exitosamente.", "success");
                setShowModal(false);
                setIsEditing(false);
            } else {
                const errorData = await response.json();
                Swal.fire("Error!", "Error al editar la mesa: " + errorData.message, "error");
            }
        } catch (error) {
            console.error("Error al editar mesa:", error);
            Swal.fire("Error!", "Ocurrió un error. Por favor, intenta de nuevo más tarde.", "error");
        }
    };

    const abrirEditarModal = (mesa) => {
        setCurrentMesa(mesa);
        setNewMesa({ capacidad: mesa.capacidad, disponibilidad: mesa.disponibilidad, ubicacion: mesa.ubicacion });
        setIsEditing(true);
        setShowModal(true);
    };

    const columns = [
        { name: "ID", selector: (row) => row.id, sortable: true },
        { name: "Capacidad", selector: (row) => row.capacidad, sortable: true },
        { name: "Disponibilidad", selector: (row) => (row.disponibilidad === 1 ? "Disponible" : "No disponible"), sortable: true },
        { name: "Ubicación", selector: (row) => row.ubicacion, sortable: true },
        {
            name: "Opciones",
            cell: (row) => (
                <div style={{ display: "flex", gap: "10px" }}>
                    <Button variant="warning" onClick={() => abrirEditarModal(row)}>
                        Editar
                    </Button>
                    <Button variant="danger" onClick={() => eliminarMesa(row.id)}>
                        Eliminar
                    </Button>
                </div>
            ),
        },
    ];

    return (
        <div className="mesas-container">
            <h1 className="mesas-title">Listado de Mesas</h1>
            <Button variant="primary" onClick={() => { setShowModal(true); setIsEditing(false); }}>
                Agregar Mesa
            </Button>
            {loading ? <p>Cargando mesas...</p> : <DataTable columns={columns} data={mesas} pagination highlightOnHover striped />}
            <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isEditing ? "Editar Mesa" : "Agregar Mesa"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Capacidad</Form.Label>
                            <Form.Control type="number" name="capacidad" value={newMesa.capacidad} onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Disponibilidad</Form.Label>
                            <Form.Control as="select" name="disponibilidad" value={newMesa.disponibilidad} onChange={handleInputChange}>
                                <option value="">Seleccione</option>
                                <option value="1">Disponible</option>
                                <option value="0">No disponible</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ubicación</Form.Label>
                            <Form.Control type="text" name="ubicacion" value={newMesa.ubicacion} onChange={handleInputChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                    </Button>
                    <Button variant="primary" onClick={isEditing ? editarMesa : agregarMesa}>
                        {isEditing ? "Guardar Cambios" : "Guardar"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Mesas;