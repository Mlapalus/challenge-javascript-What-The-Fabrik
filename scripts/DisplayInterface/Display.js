class Display
{
    static displayResults(data)
    {
        const results = document.querySelector('#results')
        results.innerHTML = ''

        for(let row of data){
            let linkResult = document.createElement('a')
            linkResult.classList.add('dropdown-item')
            linkResult.dataset.modal=row.mal_id
            linkResult.addEventListener('click',(e) => {
                    this.loadCard(row);
                    CardRepository.store(row);
                    AnimeResource.getDetail(row.mal_id).then(json => 
                                    {
                                        this.loadModal(json)
                                        ModalRepository.store(json)
                                    });
                    });
            linkResult.textContent = row.title
            results.appendChild(linkResult)
        }
}

    static loadCard(data)
    {
        const cardElement = new CardElement(document.getElementById('row'),document.getElementById('card-template'), data);
        cardElement.addAnime();
    }

    static loadModal(data) {
        const modalElement = new ModalElement(document.getElementById('modal-list'),document.getElementById('modal-template'), data);
        modalElement.addAnime();
    }

}