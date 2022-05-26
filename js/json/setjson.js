   export default function db_wrt(İd,tarih,baslik,icerik)
  {
    
    /*const person = {
            Tarih:tarih,
            Baslik: baslik,
            İcerik: icerik,
        }*/
        const person = {
          "kategorsi1":[
            {id:İd,Tarih:tarih,baslik:baslik,icerik:icerik}
          ]
      }
    let respo=true

    if(tarih !=null || baslik !=null || icerik!=null){

        localStorage.setItem('user', JSON.stringify(person));
    }
    else{
      respo=false;
    }

    return respo
    
  }