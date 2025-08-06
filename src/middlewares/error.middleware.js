// Funcion para manejar errores y rutas no encontradas
function handleNotFound(request, reply) {
    const message = "Ruta no encontrada";
    request.log.warn(message);
    reply.status(404).send({
        status: false,
        message,
        data: null,
    });
}

// Funcion para manejar errores generales
// y enviar una respuesta estandarizada
function handleError(error, request, reply) {
    const statusCode = error.statusCode || 500;
    const message = error.message || "Error en la petición";
    request.log.error(error);
    reply.status(statusCode).send({
        status: false,
        message,
        data: null,
    });
}

export { handleError, handleNotFound };