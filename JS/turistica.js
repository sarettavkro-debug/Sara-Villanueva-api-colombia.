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

function mostrarPlatos(listaPlatos) {
    contenedorPlatos.innerHTML = '';
    listaPlatos.forEach(plato => {
        const tarjeta = document.createElement('div');
        tarjeta.classList.add('tarjeta');

        const imagenPlato = plato.image || 'https://images.unsplash.com/photo-1504674900247-0877df9cc836';

        tarjeta.innerHTML = `
            <img src="${imagenPlato}" alt="${plato.name}" onerror="this.src='https://images.unsplash.com/photo-1504674900247-0877df9cc836'">
            <div class="contenido-tarjeta">
                <h3>${plato.name}</h3>
                <p><strong>Departamento:</strong> ${plato.department ? plato.department.name : 'Colombia'}</p>
                <p>${plato.description || 'Delicia de la gastronomía colombiana.'}</p>
            </div>
        `;
        contenedorPlatos.appendChild(tarjeta);
    });
}

document.addEventListener('DOMContentLoaded', cargarPlatos);