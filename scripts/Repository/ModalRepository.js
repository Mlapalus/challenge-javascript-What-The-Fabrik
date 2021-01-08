class ModalRepository
{
  static store(modal){
    
    const prefix = localStorage.getItem('nbCard');
    localStorage.setItem(prefix+"-trailer",modal.trailer_url);
    localStorage.setItem(prefix+"-source",modal.source);
    localStorage.setItem(prefix+"-duration",modal.duration);
    localStorage.setItem(prefix+"-id",modal.mal_id);
    localStorage.setItem(prefix+"-synopsis",modal.synopsis);
    for (let i =0; i<modal.genres.length; i++)
        {
          localStorage.setItem(prefix+"-genre-"+i, modal.genres[i].name);
        }
  }

  static find(i) {
    let data = {
        "mal_id": "",
        "trailer": "",
        "source": "",
        "duration": "",
        "synopsis": "",
        "genres": [] 
    };
    let index= 0;
    let genres = [];
    
    while (localStorage.getItem(i+"-genre-"+index)) {
      genres.push({
        "name": localStorage.getItem(i+"-genre-"+index)
      });
      index++;
    }
    data = {
        "mal_id": localStorage.getItem(i+"-id"),
        "trailer": localStorage.getItem(i+"-trailer"),
        "source": localStorage.getItem(i+"-source"),
        "duration": localStorage.getItem(i+"-duration"),
        "synopsis": localStorage.getItem(i+"-synopsis"),
        "genres": genres 
    }
    return data;
  }
}