class Create {

  static span(options)
  {
    const newSpan = document.createElement('span');

    newSpan.innerHTML = options['text'] ? options['text'] : "";

    if (options['class']) 
    {
      const classes = options['class'].split(' ')
      for (let i=0; i<classes.length;i++)
      {
        newSpan.classList.add(classes[i]);
      }
    }
    
    return newSpan;

  }

  static td(options=null)
  {
    const newTd = document.createElement('td');
    if(options) {
      newTd.innerText = options['text'] ? options['text'] : "";
    }

    return newTd;
  }



}