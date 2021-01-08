//localStorage.clear();

if (localStorage.getItem('nbCard')) 
{
    for (let i=1; i<= +localStorage.getItem('nbCard');i++) {
        Display.loadCard(CardRepository.find(i));
        Display.loadModal(ModalRepository.find(i));
    }   
};


const searchField = document.querySelector('#search')

searchField.addEventListener('keyup', (e) => 
    {
    e.preventDefault()
    let search = e.target.value
    if (search.length >= 3) {
        SearchResource.fetch(`https://api.jikan.moe/v3/search/anime?q=${search}&limit=6`)
            .then(data => { 
                Display.displayResults(data)
            })
        }
    })

