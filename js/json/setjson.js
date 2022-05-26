   export default class db_wrt
  {
   
    veri_ekle(id,tarih,baslik,icerik) {
       /*const person = {
            Tarih:tarih,
            Baslik: baslik,
            İcerik: icerik,
        }*/

        const person = {Tarih:tarih,baslik:baslik,icerik:icerik}
                
            
            let respo=true

            if(tarih !=null || baslik !=null || icerik!=null){

              console.log(person);
                localStorage.setItem(id, JSON.stringify(person));
            }
            else{
              respo=false;
            }

             return respo
    }
   
    
  }