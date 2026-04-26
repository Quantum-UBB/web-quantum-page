/**
 * Entidad de dominio que representa una Noticia.
 */
export class News {
    constructor({
        id,
        title,
        description,
        tag,
        author,
        date,
        image,
        content,
        secondaryImages = [],
        status = 'draft',
        isLocal = false
    }) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tag = tag;
        this.author = author;
        this.date = date;
        this.image = image;
        this.content = content;
        this.secondaryImages = secondaryImages;
        this.status = status;
        this.isLocal = isLocal;
    }
}
