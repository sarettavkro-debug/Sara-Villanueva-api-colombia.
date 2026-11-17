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

        // Filtrar o limitar solo los primeros 20 elementos (Extra / Requisito 4: mínimo 15)
        const primerosVeinte = datos.slice(0, 20);

        mensajeCarga.style.display = 'none';
        mostrarAtracciones(primerosVeinte);

    } catch (error) {
        mensajeCarga.textContent = 'Hubo un error al cargar la información. Inténtalo más tarde.';
        console.error('Error:', error);
    }
}

function mostrarAtracciones(atracciones) {
    contenedor.innerHTML = ''; // Limpiar contenedor
    atracciones.forEach(item => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        // Validación de imágenes de la API
        const imagenValida = item.images && item.images.length > 0 
            ? item.images[0] 
            : 'https://images.unsplash.com/photo-1533105079780-92b9be482077';

        tarjeta.innerHTML = `
            <img src="${imagenValida}" alt="${item.name}" onerror="this.src='https://images.unsplash.com/photo-1533105079780-92b9be482077'">
            <div class="contenido-tarjeta">
                <h3>${item.name}</h3>
                <p><strong>Ciudad/Departamento:</strong> ${item.city ? item.city.name : 'No especificada'}</p>
                <p>${item.description ? item.description.substring(0, 120) + '...' : 'Sin descripción disponible.'}</p>
            </div>
        `;
        contenedor.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', cargarAtracciones);