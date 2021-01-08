class CardRepository
{
  static store(card){
    if (!localStorage.getItem('nbCard')){
          localStorage.setItem('nbCard', '1');
    } else 
    {
      let nbCard = 1 + +localStorage.getItem('nbCard');
      localStorage.setItem('nbCard', `${nbCard}`);
    }

    const prefix = localStorage.getItem('nbCard');
    localStorage.setItem(prefix+"-title",card.title);
    localStorage.setItem(prefix+"-image_url",card.image_url);
    localStorage.setItem(prefix+"-score",card.score);
    localStorage.setItem(prefix+"-episodes",card.episodes);
    localStorage.setItem(prefix+"-id",card.mal_id);
  }

  static find(i){
    let data = {
      "title": "",
      "image_url": "",
      "score": "",
      "episodes": "",
      "mal_id": "",
    };
    data = {
            "title": localStorage.getItem(i+"-title"),
            "image_url": localStorage.getItem(i+"-image_url"),
            "score": localStorage.getItem(i+"-score"),
            "episodes": localStorage.getItem(i+"-episodes"),
            "mal_id": localStorage.getItem(i+"-id"),
    }
    return data;   
  }
}