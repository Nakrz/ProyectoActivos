// Manejar el evento 'DOMContentLoaded'
document.addEventListener('DOMContentLoaded', function () {
    const detalleMovimiento = document.getElementById('detalleMovimiento');

    // Manejar el envío del formulario
    detalleMovimiento.addEventListener('submit', function (event) {
        event.preventDefault(); // Detener el envío del formulario

        // Obtener valores del formulario
        const codigo = document.getElementById('codigoAsignarActivo').value.trim();
        const fecha = document.getElementById('fechaAsignarActivo').value.trim();
        const idPersona = document.getElementById('personaAsignarActivo').value.trim();
        const persona = document.getElementById('personaAsignarActivo').selectedOptions[0].textContent.trim();
        const comentario = document.getElementById('comentarioAsignarActivo').value.trim();



        // Verificar si todos los campos están llenos
        if (codigo && fecha && idPersona && persona && comentario) {
            const Activo = {
                codigo: codigo,
                fecha: fecha,
                idPersona: idPersona,
                persona: persona,
                comentario: comentario
            };

            // Agregar una nueva asignacion
            addAsignacion(Activo)
                .then(response => {
                    console.log('Asignacion agregado:', response);
                    detalleMovimiento.reset(); // Limpiar el formulario después de agregar
                })
                .catch(error => console.error('Error al agregar la asignacion:', error));
        } else {
            alert('Por favor, complete todos los campos.');
        }
    });
});

// Función para agregar una nueva asignacion
async function addAsignacion(Activo) {
    try {
        const response = await fetch('http://localhost:3000/detalleMovimiento', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(Activo),
        });

        if (response.ok) {
            return await response.json();
        } else {
            throw new Error('Error al agregar la asignacion.');
        }
    } catch (error) {
        console.error('Error al agregar la asignacion:', error);
        throw error;
    }
}