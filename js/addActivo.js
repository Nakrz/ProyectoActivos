class GestorActivos extends HTMLElement {
    constructor() {
        super();
        this.render();
        this.agregarFormulario = this.agregarFormulario.bind(this);
    }

    agregarFormulario() {
        const formulario = this.querySelector('.agregar-activo');
        formulario.style.display = 'block';
    }

    render() {
        this.innerHTML = /* html */ `
            <div class="contenido">
                <div class="agregar-activo" style="display: none;">
                    <h2>Agregar</h2>
                    <br><br>
                    <div>
                        <label for="Id">ID:</label>
                        <input type="text" id="Id" name="Id">
                    </div>
                    <div>
                        <label for="codTransaccion">Código de Transacción:</label>
                        <input type="text" id="codTransaccion" name="codTransaccion">
                    </div>
                    <div>
                        <label for="nroFormulario">Número de Formulario:</label>
                        <input type="text" id="nroFormulario" name="nroFormulario">
                    </div>
                    <div>
                        <label for="IdMarca">ID de Marca:</label>
                        <input type="text" id="IdMarca" name="IdMarca">
                    </div>
                    <div>
                        <label for="IdCategoria">ID de Categoría:</label>
                        <input type="text" id="IdCategoria" name="IdCategoria">
                    </div>
                    <div>
                        <label for="IdTipo">ID de Tipo:</label>
                        <input type="text" id="IdTipo" name="IdTipo">
                    </div>
                    <div>
                        <label for="valorUnitario">Valor Unitario:</label>
                        <input type="text" id="valorUnitario" name="valorUnitario">
                    </div>
                    <div>
                        <label for="IdProveedor">ID de Proveedor:</label>
                        <input type="text" id="IdProveedor" name="IdProveedor">
                    </div>
                    <div>
                        <label for="nroSerial">Número de Serie:</label>
                        <input type="text" id="nroSerial" name="nroSerial">
                    </div>
                    <div>
                        <label for="IdEmpresaResponsable">ID de Empresa Responsable:</label>
                        <input type="text" id="IdEmpresaResponsable" name="IdEmpresaResponsable">
                    </div>
                    <div>
                        <label for="IdEstado">ID de Estado:</label>
                        <input type="text" id="IdEstado" name="IdEstado">
                    </div>
                    <button id="agregar">Agregar</button>
                </div>
            </div>
        `;
    }
}


customElements.define('gestor-activos', GestorActivos);

document.addEventListener('DOMContentLoaded', () => {
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