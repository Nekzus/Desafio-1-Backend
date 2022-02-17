type Book = { titulo: string; autor: string };

class Usuario {
    nombre: string;
    apellido: string;
    libros: Book[];
    mascotas: string[];

    constructor(
        nombre: string,
        apellido: string,
        libros: Book[],
        mascotas: string[]
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    set addBoook(libro: Book) {
        this.libros.push(libro);
    }
    
    set addMascota(mascota: string) {
        this.mascotas.push(mascota);
    }

    get getFullName(): string {
        return `${this.nombre} ${this.apellido}`;
    }

    get getbookNames(): string[] {
        return this.libros.map((libro) => libro.titulo);
    }

    countMascotas() {
        return this.mascotas.length;
    }
}

// Crear un usuario
const usuario1 = new Usuario(
    "Juan",
    "Perez",
    [
        { titulo: "El señor de las moscas", autor: "William Golding" },
        { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    ],
    ["perro", "gato"]
);

// Agregar mascota
usuario1.addMascota = "hamster";
// Agregar libro
usuario1.addBoook = { titulo: "Harry Potter", autor: "J. K. Rowling" };

// Mostrar datos del usuario
console.log(usuario1);
// Mostrar cantidad de mascotas 
console.log('Cantidad de mascotas: ', usuario1.countMascotas());
// Mostrar nombre completo
console.log(`Nombre Completo: ${usuario1.getFullName}`);
// Mostrar titulos de los libros
console.log('Titulos de libros: ', usuario1.getbookNames);
