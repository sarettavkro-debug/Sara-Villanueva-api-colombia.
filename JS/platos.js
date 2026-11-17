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