export default  function getjson()
{    
    let objct=  JSON.parse(localStorage.getItem('user'))
 
    let dizi=[objct.Tarih,objct.baslik,objct.icerik]
    console.log(dizi[0]);
    return dizi
    
}