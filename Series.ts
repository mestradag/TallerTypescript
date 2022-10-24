export class Series{
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    urlSerie: string;
    urlImage: string;

    constructor(id: number, name: string, channel: string, seasons: number, description: string, urlSerie: string, urlImage: string){
        this.id = id;
        this.name = name;
        this.channel = channel;
        this.seasons = seasons;
        this.description = description;
        this.urlSerie = urlSerie;
        this.urlImage = urlImage;
    }
}
