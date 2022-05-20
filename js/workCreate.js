


export default class Create
{
  elementCreate(eleman,classList){
      let di=document.createElement(eleman);
      if(classList!=null)
      {
       classList.forEach(element => {
           di.classList.add(element)
          
       });
      }
      return di;
    }
 
}