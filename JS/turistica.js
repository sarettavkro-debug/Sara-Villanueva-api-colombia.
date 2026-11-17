const URL_TURISMO = 'https://api-colombia.com/api/v1/TouristicAttraction';
const contenedor = document.getElementById('contenedor-atracciones');
const mensajeCarga = document.getElementById('mensaje-carga');

async function cargarAtracciones() {
    try {
        mensajeCarga.textContent = 'Cargando atractivos turísticos...';
        const respuesta = await fetch(URL_TURISMO);

        if (!respuesta.ok) {
            throw new Error('Error al obtener los datos de la API');
        }

        const datos = await respuesta.json();

        const primerosVeinte = datos.slice(0, 20);

        mensajeCarga.style.display = 'none';
        mostrarAtracciones(primerosVeinte);

    } catch (error) {
        mensajeCarga.textContent = 'Hubo un error al cargar la información. Inténtalo más tarde.';
        console.error('Error:', error);
    }
}