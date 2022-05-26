export default  function getjson()
{    

 
    let dizi=[]
    let lett=localStorage

    for (let index = 0; index <= lett.length; index++) {
                 
        if(lett.key(index) != null) { 
            let objct=  JSON.parse(localStorage.getItem(lett.key(index)))
            dizi.push(objct)
        }
        else{
            
        }
   }




    return dizi
    
}

  //db alanından verileri gekiren araç