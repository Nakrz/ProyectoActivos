class GestorActivos extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.agregarFormulario = this.agregarFormulario.bind(this);
    }

    agregarFormulario() {
        const formulario = this.querySelector('.agregar-activo');
        if (formulario) {
            formulario.style.display = 'block';
        } else {
            console.error('El formulario no se encontró en el DOM');
        }
    }
    

    async guardarActivo(nuevoActivo) {
        try {
            const response = await fetch('http://localhost:3001/assets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(nuevoActivo)
            });

            if (response.ok) {
                console.log('Activo agregado exitosamente');
                formulario.style.display = 'none';
            } else {
                console.error('Error al agregar el activo:', response.statusText);
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error.message);
        }
    }
    
    
    render() {
        this.innerHTML = /* html */ `
            <div class="contenido">
                <div class="agregar-activo" style="display: none;">
                    <h2 class="nombreOPC">Agregar</h2>
                    <br><br>
                    <div>
                        <label for="idAct">ID:</label>
                        <input type="text" id="idAct" name="idActivo">
                    </div>
                    <div>
                        <label for="codTransaccion">Codigo de Transaccion:</label>
                        <input type="text" id="codTransaccion" name="codTransaccion">
                    </div>
                    <div>
                        <label for="nroFormulario">Numero de Formulario:</label>
                        <input type="text" id="nroFormulario" name="nroFormulario">
                    </div>
                    <h4>Marca</h4>
                    <select id="IdMarca">
                        <option value="empty">Asignar</option>
                        <option value="LG">LG</option>
                        <option value="COMPUMAX">COMPUMAX</option>
                        <option value="LOGITECH">LOGITECH</option>
                        <option value="BENQ">BENQ</option>
                        <option value="ASUS">ASUS</option>
                        <option value="LENOVO">LENOVO</option>
                        <option value="HP">HP</option>
                    </select>
                    <h4>Categoria</h4>
                    <select id="IdCategoria">
                        <option value="empty">Asignar</option>
                        <option value="Equipo de Computo">Equipo de Computo</option>
                        <option value="Electrodomestico">Electrodomestico</option>
                        <option value="Juego">Juego</option>
                    </select>
                    <h4>Tipo</h4>
                    <select id="IdTipo">
                        <option value="empty">Asignar</option>
                        <option value="Monitor">Monitor</option>
                        <option value="CPU">CPU</option>
                        <option value="Teclado">Teclado</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Aire Acondicionado">Aire Acondicionado</option>
                        <option value="Portatil">Portatil</option>
                        <option value="Impresora">Impresora</option>
                    </select>
                    <br><br><br>
                    <div>
                        <label for="valorUnitario">Valor Unitario:</label>
                        <input type="text" id="valorUnitario" name="valorUnitario">
                    </div>
                    <div>
                        <label for="IdProveedor">ID de Proveedor:</label>
                        <input type="text" id="IdProveedor" name="IdProveedor">
                    </div>
                    <div>
                        <label for="nroSerial">Numero de Serie:</label>
                        <input type="text" id="nroSerial" name="nroSerial">
                    </div>
                    <div>
                        <label for="IdEmpresaResponsable">ID de Empresa Responsable:</label>
                        <input type="text" id="IdEmpresaResponsable" name="IdEmpresaResponsable">
                    </div>
                    <h4>Estado</h4>
                    <select id="IdEstado">
                        <option value="empty">Seleccione</option>
                        <option value="No asignado">No asignado</option>
                        <option value="Asignado">Asignado</option>
                        <option value="Dado de baja por Daño">Dado de baja por Daño</option>
                        <option value="En reparacion y/o Garantia">En reparacion y/o Garantia</option>
                    </select>
                    <button id="agregar">Agregar</button>
                </div>
            </div>
        `;

        const agregarActivoBtn = this.querySelector('#agregar');
        if (agregarActivoBtn) {
            agregarActivoBtn.addEventListener('click', () => {
                const nuevoActivo = {
                    idActivo: document.getElementById('idAct').value,
                    codTransaccion: document.getElementById('codTransaccion').value,
                    nroFormulario: document.getElementById('nroFormulario').value,
                    IdMarca: document.getElementById('IdMarca').value,
                    IdCategoria: document.getElementById('IdCategoria').value,
                    IdTipo: document.getElementById('IdTipo').value,
                    valorUnitario: document.getElementById('valorUnitario').value,
                    IdProveedor: document.getElementById('IdProveedor').value,
                    nroSerial: document.getElementById('nroSerial').value,
                    IdEmpresaResponsable: document.getElementById('IdEmpresaResponsable').value,
                    IdEstado: document.getElementById('IdEstado').value
                };
                this.guardarActivo(nuevoActivo);
            });
        } 
    }
}

document.addEventListener('DOMContentLoaded', () => {
    customElements.define('gestor-activos', GestorActivos);

    const contenido = document.querySelector('.contenido');
    if (contenido) {
        const gestorActivos = contenido.querySelector('gestor-activos');

        const opcionesMenu = document.querySelectorAll('.side-dropdown li a');
        opcionesMenu.forEach(opcion => {
            opcion.addEventListener('click', (event) => {
                const opcionSeleccionada = event.target.dataset.form;
                if (opcionSeleccionada === 'agregar') {
                    gestorActivos.agregarFormulario();
                }
            });
        });
    }
});







