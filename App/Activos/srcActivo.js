
class srcActivos extends HTMLElement {
    constructor() {
        super();
        this.render();
    }


    mostrarBusqueda() {
        const buscarActivo = this.querySelector('.buscar-activo');
        buscarActivo.style.display = 'block';
    }

    render() {
        this.innerHTML = /* html */ `
            <div class="contenido">
                <div class="buscar-activo" style="display: none;">
                    <h2 class="nombreOPC">Buscar</h2>
                    <br><br>
                    <input type="text" id="busquedaIn" placeholder="Introduce tu búsqueda">
                    <button id="buscarBt">Buscar</button>
                    <div id="resultadoBusqueda"></div>
                </div>
            </div>
        `;

        const buscarBtn = this.querySelector('#buscarBt');
        buscarBtn.addEventListener('click', () => {
            const criterio = document.getElementById('busquedaIn').value.trim().toLowerCase();
            this.buscarEnJSON(criterio);
        });
    }
}

    // async buscarEnJSON(criterio) {
    //     try {
    //         const response = await fetch('http://localhost:3001/assets');
    //         if (!response.ok) {
    //             throw new Error('Error al cargar el JSON');
    //         }
    //         const jsonData = await response.json();
    //         const resultados = this.realizarBusqueda(criterio, jsonData);
    //         this.mostrarResultados(resultados);
    //     } catch (error) {
    //         console.error('Error al buscar en el JSON:', error.message);
    //     }
    // }

    // realizarBusqueda(criterio, jsonData) {
    //     const resultados = [];

    //     return resultados;
    // }

    // mostrarResultados(resultados) {

    // }

customElements.define('src-activos', srcActivos);



const buscarLink = document.querySelector('a[data-form="buscar"]');
if (buscarLink) {
    buscarLink.addEventListener('click', function() {
        const srcActivosElement = document.querySelector('src-activos');
        if (srcActivosElement) {
            srcActivosElement.mostrarBusqueda();
        }
    });
}