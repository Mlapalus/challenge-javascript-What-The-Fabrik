class CardElement
{
    constructor(container, template, data) {
        this.container = container
        this.template = template
        this.data = data
    }

    get templateClone() {
        const clone = document.importNode(this.template.content, true);

        clone.querySelector("img").alt = this.data.title;
        clone.querySelector("img").src = this.data.image_url;

        const optionsSpanScore = {
            "text": `${this.data.score}`,
            "class": "badge badge-info"
        }
        const span = Create.span(optionsSpanScore);
        const p = clone.querySelector("p");
        p.innerHTML = this.data.title;
        p.appendChild(span);

        clone.querySelector("small").innerHTML = this.data.episodes + " Ep.";
        
        const button = clone.querySelector("button");
        button.setAttribute("data-target", `#modal-detail-anime-${this.data.mal_id}`);
        button.innerText = "Info";
        
        return clone;
    }

    addAnime() {
        this.container.appendChild(this.templateClone)
    }
}