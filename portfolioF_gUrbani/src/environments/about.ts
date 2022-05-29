export class About {
    id: number;
    name: string;
    title: string;
    about_text: string;
    img_avatar: string;
    constructor(id: number, name: string, title: string, about_text: string, img_avatar: string) {
        this.id = id;
        this.name = name;
        this.title = title;
        this.about_text = about_text;
        this.img_avatar = img_avatar;

    }
}
