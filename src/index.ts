interface Libro { titulo: string; autor: string };

class Usuario {
    nombre: string;
    apellido: string;
    libros: Libro[];
    mascotas: string[];

    constructor(
        nombre: string,
        apellido: string,
        libros: Libro[],
        mascotas: string[]
    ) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    set addBoook(libro: Libro) {
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

const usuario1 = new Usuario(
    "Juan",
    "Perez",
    [
        { titulo: "El señor de las moscas", autor: "William Golding" },
        { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien" },
    ],
    ["perro", "gato"]
);

usuario1.addMascota = "hamster";
usuario1.addBoook = { titulo: "Harry Potter", autor: "J. K. Rowling" };

console.log(usuario1);
console.log("Cantidad de mascotas", usuario1.countMascotas());
console.log("Nombre Completo: ", usuario1.getFullName);
console.log("Titulos de libros: ", usuario1.getbookNames);
