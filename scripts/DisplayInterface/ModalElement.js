class ModalElement
{
    constructor(container, template, data) {
        this.container = container
        this.template = template
        this.data = data
    }

    get templateClone() {
        const clone = document.importNode(this.template.content, true);

        clone.querySelector("div").setAttribute("id", `modal-detail-anime-${this.data.mal_id}`);
        const h5 = clone.querySelector("h5");
        h5.innerHTML = this.data.title;

        const trailer = clone.querySelector("a");
        trailer.setAttribute("href", `${this.data.trailer_url}`);

        const button = clone.querySelector("button");
        button.innerText = "x";

        const source = clone.querySelector('tbody').getElementsByClassName("source");
        source[0].appendChild(Create.td({"text": "Source"}));
        source[0].appendChild(Create.td({"text": `${this.data.source}`}));

        const duration = clone.querySelector('tbody').getElementsByClassName("duration");
        duration[0].appendChild(Create.td({"text": "Duration"}));
        duration[0].appendChild(Create.td({"text": `${this.data.duration}`}));

        const genre = clone.querySelector('tbody').getElementsByClassName("genre");
        genre[0].appendChild(Create.td({"text":"Genre"}));
        
        const tdGenreResult = Create.td();

        for (let i =0; i<this.data.genres.length; i++)
        {
            const span = Create.span({
                "text": `${this.data.genres[i].name}`,
                "class": "badge badge-info"
            })
            tdGenreResult.appendChild(span); 
        }
        genre[0].appendChild(tdGenreResult);

        const synopsis = clone.querySelector('tbody').getElementsByClassName("synopsis");
        synopsis[0].appendChild(Create.td({"text" : "Synopsis"}));
        synopsis[0].appendChild(Create.td({"text" : `${this.data.synopsis}`}));

        return clone;
    }

    addAnime() {
        this.container.appendChild(this.templateClone)
    }
}