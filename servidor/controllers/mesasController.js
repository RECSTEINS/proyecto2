const { connection } = require("../config/config.db");

module.exports.createMesa = (req, res) => {
    const { capacidad, disponibilidad, ubicacion } = req.body;

    if (!capacidad || typeof disponibilidad === "undefined" || !ubicacion) {
        return res.status(400).send({
            message: "Todos los campos son requeridos: capacidad, disponibilidad y ubicación.",
        });
    }

    const query = `
        INSERT INTO mesas (mesa_capacidad, mesa_disponibilidad, mesa_ubicacion)
        VALUES (?, ?, ?)
    `;

    try {
        connection.query(
            query,
            [capacidad, disponibilidad, ubicacion],
            (err, result) => {
                if (err) {
                    console.error("Error al crear mesa:", err);
                    return res.status(500).send({
                        message: "Error al crear la mesa en la base de datos.",
                    });
                }

                res.status(201).send({
                    message: "Mesa creada exitosamente.",
                    mesaId: result.insertId,
                });
            }
        );
    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).send({
            message: "Error en el servidor.",
        });
    }
};

module.exports.getMesas = (req, res) => {
    const query = `
        SELECT 
            pk_mesa AS id,
            mesa_capacidad AS capacidad,
            mesa_disponibilidad AS disponibilidad,
            mesa_ubicacion AS ubicacion
        FROM mesas;
    `;

    try {
        connection.query(query, (err, results) => {
            if (err) {
                console.error("Error al obtener las mesas:", err);
                return res.status(500).send({
                    message: "Error al consultar las mesas en la base de datos.",
                });
            }

            res.status(200).send({
                message: "Mesas obtenidas exitosamente.",
                data: results,
            });
        });
    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).send({
            message: "Error en el servidor.",
        });
    }
};

module.exports.deleteMesa = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ message: "El ID de la mesa es requerido." });
    }

    const query = `
        DELETE FROM mesas WHERE pk_mesa = ?;
    `;

    try {
        connection.query(query, [id], (err, result) => {
            if (err) {
                console.error("Error al eliminar la mesa:", err);
                return res.status(500).send({ message: "Error al eliminar la mesa." });
            }

            if (result.affectedRows === 0) {
                return res.status(404).send({ message: "Mesa no encontrada." });
            }

            res.status(200).send({ message: "Mesa eliminada exitosamente." });
        });
    } catch (error) {
        console.error("Error del servidor:", error);
        res.status(500).send({ message: "Error del servidor." });
    }
};


module.exports.updateMesa = (req, res) => {
    const { id } = req.params;
    const { capacidad, disponibilidad, ubicacion } = req.body;

    if (!id || !capacidad || typeof disponibilidad === "undefined" || !ubicacion) {
        return res.status(400).send({
            message: "Todos los campos son requeridos: ID, capacidad, disponibilidad y ubicación.",
        });
    }

    const query = `
        UPDATE mesas
        SET mesa_capacidad = ?, mesa_disponibilidad = ?, mesa_ubicacion = ?
        WHERE pk_mesa = ?;
    `;

    try {
        connection.query(
            query,
            [capacidad, disponibilidad, ubicacion, id],
            (err, result) => {
                if (err) {
                    console.error("Error al actualizar la mesa:", err);
                    return res.status(500).send({ message: "Error al actualizar la mesa." });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).send({ message: "Mesa no encontrada." });
                }

                res.status(200).send({ message: "Mesa actualizada exitosamente." });
            }
        );
    } catch (error) {
        console.error("Error del servidor:", error);
        res.status(500).send({ message: "Error del servidor." });
    }
};