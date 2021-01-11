class ModalRepository
{
  static store(modal){
    
    const prefix = localStorage.getItem('nbCard');
    localStorage.setItem(prefix + "modal",JSON.stringify(modal));

  }

  static find(i) {
    const modal = localStorage.getItem(i + "modal");
    return modal && JSON.parse(modal);
  }
}