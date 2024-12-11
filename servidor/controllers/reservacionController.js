const { connection } = require("../config/config.db");

module.exports.createReservacion = (req, res) => {
    const { nombre, email ,numero_personas, fecha, hora, comentarios, fk_mesa } = req.body;

    if (!nombre || !numero_personas || !fecha || !hora || !fk_mesa) {
        return res.status(400).send({
            message: "Todos los campos son requeridos: nombre, número de personas, fecha, hora, y mesa asociada.",
        });
    }

    const query = `
        INSERT INTO reservaciones (reservacion_nombre, reservacion_email, reservacion_numero_personas, reservacion_fecha, reservacion_hora, reservacion_comentarios, fk_mesa)
        VALUES (?, ?,?, ?, ?, ?, ?);
    `;

    try {
        connection.query(
            query,
            [nombre, email,numero_personas, fecha, hora, comentarios || null, fk_mesa],
            (err, result) => {
                if (err) {
                    console.error("Error al crear reservación:", err);
                    return res.status(500).send({
                        message: "Error al crear la reservación en la base de datos.",
                    });
                }

                res.status(201).send({
                    message: "Reservación creada exitosamente.",
                    reservacionId: result.insertId,
                });
            }
        );
    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).send({ message: "Error en el servidor." });
    }
};

module.exports.getReservaciones = (req, res) => {
    const query = `
        SELECT 
            pk_reservacion AS id,
            reservacion_nombre AS nombre,
            reservacion_numero_personas AS numero_personas,
            reservacion_fecha AS fecha,
            reservacion_hora AS hora,
            reservacion_comentarios AS comentarios,
            fk_mesa AS mesa_id
        FROM reservaciones;
    `;

    try {
        connection.query(query, (err, results) => {
            if (err) {
                console.error("Error al obtener las reservaciones:", err);
                return res.status(500).send({
                    message: "Error al consultar las reservaciones en la base de datos.",
                });
            }

            res.status(200).send({
                message: "Reservaciones obtenidas exitosamente.",
                data: results,
            });
        });
    } catch (error) {
        console.error("Error en el servidor:", error);
        res.status(500).send({ message: "Error en el servidor." });
    }
};

module.exports.deleteReservacion = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ message: "El ID de la reservación es requerido." });
    }

    const query = `
        DELETE FROM reservaciones WHERE pk_reservacion = ?;
    `;

    try {
        connection.query(query, [id], (err, result) => {
            if (err) {
                console.error("Error al eliminar la reservación:", err);
                return res.status(500).send({ message: "Error al eliminar la reservación." });
            }

            if (result.affectedRows === 0) {
                return res.status(404).send({ message: "Reservación no encontrada." });
            }

            res.status(200).send({ message: "Reservación eliminada exitosamente." });
        });
    } catch (error) {
        console.error("Error del servidor:", error);
        res.status(500).send({ message: "Error del servidor." });
    }
};

module.exports.updateReservacion = (req, res) => {
    const { id } = req.params;
    const { nombre, email, numero_personas, fecha, hora, comentarios, fk_mesa } = req.body;

    if (!id || !nombre || !numero_personas || !fecha || !hora || !fk_mesa) {
        return res.status(400).send({
            message: "Todos los campos son requeridos: ID, nombre, número de personas, fecha, hora, y mesa asociada.",
        });
    }

    const query = `
        UPDATE reservaciones
        SET reservacion_nombre = ?, reservacion_email = ?, reservacion_numero_personas = ?, reservacion_fecha = ?, reservacion_hora = ?, reservacion_comentarios = ?, fk_mesa = ?
        WHERE pk_reservacion = ?;
    `;

    try {
        connection.query(
            query,
            [nombre, email, numero_personas, fecha, hora, comentarios || null, fk_mesa, id],
            (err, result) => {
                if (err) {
                    console.error("Error al actualizar la reservación:", err);
                    return res.status(500).send({ message: "Error al actualizar la reservación." });
                }

                if (result.affectedRows === 0) {
                    return res.status(404).send({ message: "Reservación no encontrada." });
                }

                res.status(200).send({ message: "Reservación actualizada exitosamente." });
            }
        );
    } catch (error) {
        console.error("Error del servidor:", error);
        res.status(500).send({ message: "Error del servidor." });
    }
};
