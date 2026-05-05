import Libro from './Libro.js';

const lista = document.getElementById('catalogo');

const fetchLibros = async () => {
    // Simulación de retraso de red (Promesa)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { t: "El Alquimista", a: "Jose Francisco", m: {isbn: "978-1"} },
                { t: "Carpeta de Investigacion", a: "Sheinbaum Pardo", m: null } // Caso nulo
            ]);
        }, 1000);
    });
};

const render = async () => {
    // TAREA 4: Llamar a fetchLibros usando await
    const datos = await fetchLibros();  

    // Limpiar placeholder
    lista.innerHTML = '';

    // TAREA 5: Iterar y renderizar usando el método de la clase Libro
    datos.forEach(item => {
        const libro = new Libro(item.t, item.a, item.m);
        lista.innerHTML += libro.generarHTML();
    });
};

render();