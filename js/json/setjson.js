   export default function db_wrt(tarih,baslik,icerik)
  {
    
    const person = {
            Tarih:tarih,
            Baslik: baslik,
            İcerik: icerik,
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