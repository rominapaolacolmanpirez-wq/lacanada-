document.addEventListener("DOMContentLoaded", () => {
    const formTurno = document.getElementById("formTurno");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

    formTurno.addEventListener("submit", (e) => {
        e.preventDefault(); // Evita que la página se recargue

        const nombre = document.getElementById("nombre").value;
        const especialidad = document.getElementById("especialidad").value;

        // Muestra el mensaje de éxito personalizado
        mensajeConfirmacion.textContent = `¡Turno solicitado con éxito, ${nombre}! Te esperamos para la especialidad de ${especialidad}.`;
        mensajeConfirmacion.classList.remove("oculto");

        // Limpia el formulario
        formTurno.reset();
    });
});