export class Projects {
    id: number;
    name: string;
    descripcion: string;
    fecha: string;
    url_project: string;
    img: string;
    constructor(id: number, name: string, descripcion: string, fecha: string, url_project: string, img: string) {
        this.id = id;
        this.name = name;
        this.descripcion = descripcion;
        this.fecha = fecha;
        this.url_project = url_project;
        this.img = img;

    }
}
