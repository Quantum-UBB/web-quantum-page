/**
 * Entidad de dominio que representa un Evento.
 */
export class Event {
    constructor({
        id,
        title,
        host,
        type,
        date,
        endDate,
        location,
        locationUrl,
        mode,
        image,
        hostImage,
        abstract,
        fullDescription,
        status = 'draft',
        isLocal = false
    }) {
        this.id = id;
        this.title = title;
        this.host = host;
        this.type = type;
        this.date = date;
        this.endDate = endDate;
        this.location = location;
        this.locationUrl = locationUrl;
        this.mode = mode;
        this.image = image;
        this.hostImage = hostImage;
        this.abstract = abstract;
        this.fullDescription = fullDescription;
        this.status = status;
        this.isLocal = isLocal;
    }
}
