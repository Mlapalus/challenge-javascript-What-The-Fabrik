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
    localStorage.setItem(prefix + "card",JSON.stringify(card));
  }

  static find(i){
    const card = localStorage.getItem(i + "card");
    return card && JSON.parse(card);
  }
}