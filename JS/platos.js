const URL_PLATOS = 'https://api-colombia.com/api/v1/TypicalDish';
const contenedorPlatos = document.getElementById('contenedor-platos');
const mensajeCargaPlatos = document.getElementById('mensaje-carga-platos');
const contadorPlatos = document.getElementById('contador-platos');

async function cargarPlatos() {
    try {
        mensajeCargaPlatos.textContent = 'Cargando sabores tradicionales...';
        const respuesta = await fetch(URL_PLATOS);

        if (!respuesta.ok) {
            throw new Error('No se pudo conectar con la API de platos típicos.');
        }     
        

        const platos = await respuesta.json();

        mensajeCargaPlatos.style.display = 'none';


        contadorPlatos.textContent = `Total de platos registrados: ${platos.length}`;

        mostrarPlatos(platos);

    } catch (error) {
        mensajeCargaPlatos.textContent = 'Error al cargar los datos gastronómicos.';
        console.error('Error:', error);
    }
}