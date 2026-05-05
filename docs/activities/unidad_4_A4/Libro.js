export default class Libro {
    constructor(titulo, autor, metadatos) {
        this.titulo = titulo;
        this.autor = autor;
        this.metadatos = metadatos;
    }

    generarHTML() {
        // TAREA 2 y 3: Optional Chaining para acceder a metadatos.isbn + Nullish Coalescing para "Sin ISBN"
        const isbn = this.metadatos?.isbn ?? "Sin ISBN";
        
        return `
<article class="card">
<h3>${this.titulo}</h3>
<p>Autor: ${this.autor}</p>
<span>ID: ${isbn}</span>
</article>
`;
    }
}