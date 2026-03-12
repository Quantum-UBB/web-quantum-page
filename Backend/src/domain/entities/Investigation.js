export class Investigation {
    constructor({
        id,
        title,
        status,
        researcher,
        lastUpdate,
        tags = [],
        abstract,
        arxiv,
        progress = 0,
        coResearchers = [],
        mentors = [],
        difficulty,
        publicada = true
    }) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.researcher = researcher;
        this.lastUpdate = lastUpdate || new Date();
        this.tags = tags;
        this.abstract = abstract;
        this.arxiv = arxiv;
        this.progress = progress;
        this.coResearchers = coResearchers;
        this.mentors = mentors;
        this.difficulty = difficulty;
        this.publicada = publicada;
    }
}
