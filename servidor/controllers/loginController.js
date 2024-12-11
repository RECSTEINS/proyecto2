const { connection } = require("../config/config.db");

module.exports.login = (req, res) => {
    const { email, password } = req.body; 

    // Consulta SQL corregida
    const consult = `
        SELECT 
            usuario_email,
            usuario_password
        FROM 
            usuarios
        WHERE usuario_email = ?
    `; 

    try {
        connection.query(consult, [email], (err, result) => {
            if (err) {
                console.error("Error al ejecutar la consulta:", err);
                res.status(500).send({ message: 'Error al consultar la base de datos.' });
                return;
            }
            
            if (result.length > 0) {
                const user = result[0];

                // Verificar contraseña (ejemplo sin cifrado, mejora con bcrypt o similar)
                if (user.usuario_password === password) {
                    res.status(200).send({
                        message: 'Inicio de sesión exitoso.',
                    });
                } else {
                    res.status(401).send({ message: 'Contraseña incorrecta.' });
                }
            } else {
                res.status(401).send({ message: 'Usuario no encontrado.' });
            }
        });
    } catch (e) {
        console.error("Error del servidor:", e);
        res.status(500).send({ message: 'Error en el servidor.' });
    }
};

module.exports.usuarios_login = (req, res) => {
    connection.query(`
            SELECT
                usuario_password,
                usuario_email
            FROM
                usuarios
        ;`,(error, results)=>{
            if(error)
            throw error;
        res.status(200).json(results);            
        });
};

