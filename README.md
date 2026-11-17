# Mini Portal de Colombia 

##  Descripción
Este proyecto es un mini portal web informativo desarrollado como parte de las actividades prácticas de desarrollo web. La aplicación consume datos dinámicos desde la **API de Colombia** (`https://api-colombia.com/`) y los renderiza en el DOM mediante JavaScript asíncrono (`async/await` y `fetch`). Consta de dos páginas independientes interconectadas mediante hipervínculos tradicionales, enfocadas en la **Guía Turística** y los **Sabores de Colombia (Platos Típicos)**.

##  Tecnologías Usadas
* **HTML5:** Estructuración semántica de las páginas (`index.html` y `platos.html`).
* **CSS3:** Diseño responsivo, paleta de colores institucional (inspirada en la bandera de Colombia: amarillo, azul y rojo), uso de CSS Grid y efectos visuales modernos.
* **JavaScript (ES6+):** Consumo de API REST con `fetch`, manejo de promesas, funciones asíncronas, manipulación dinámica del DOM, validaciones de respaldo para imágenes y conteo de elementos.

##  Estructura del Proyecto
```text
sara-villanueva-api-colombia/
│
├── index.html            # Página principal: Guía Turística de Colombia
├── platos.html           # Segunda página: Sabores de Colombia (Platos Típicos)
├── css/
│   └── style.css         # Estilos generales, diseño responsivo y tema tricolor
└── js/
    ├── turistica.js      # Lógica de consumo de API y renderizado para Guía Turística
    └── platos.js         # Lógica de consumo de API y renderizado para Sabores de Colombia
```

##  Instrucciones de Uso
1. Clona este repositorio o descarga los archivos en tu equipo:
   ```bash
   git clone https://github.com/tu-usuario/sara-villanueva-api-colombia.git
   ```
2. Abre la carpeta del proyecto en tu editor de código de preferencia (ej. **Visual Studio Code**).
3. Abre el archivo **`index.html`** directamente en tu navegador web (o utiliza la extensión *Live Server*).
4. Navega entre la Guía Turística y la sección de Sabores Típicos utilizando el botón de navegación del encabezado.

##  Autora
* **Sara Villanueva Caro**
* Estudiante de Desarrollo de Software / Programación.