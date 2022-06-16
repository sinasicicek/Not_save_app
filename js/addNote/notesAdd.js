
import get_not from "../json/get_json.js"
import set_not from "../json/setjson.js"
import takvmi from "../takvim.js"


let ad=document.getElementById("not_ekle")
let ekle=document.getElementById("add_btn")
const fra=document.getElementById("winfFrame")
const close=document.getElementById("add_btn_close")

const icerik=document.getElementById("not_text_add")
const baslik=document.getElementById("not_baslik_add")


let control=true;
ad.addEventListener('click',()=>{
    if(control){
        
        fra.classList.add("open")
        control=false

  
    }
    else{
        
        fra.classList.remove("open")
        control=true;
    }
})

close.addEventListener("click",()=>{
    fra.classList.remove("open")
    control=true;
})


ekle.addEventListener("click",()=>{
                

                let toplam_tarih=takvmi()
                let takvim=new Date()

                console.log(toplam_tarih);
                let d= new set_not();
               let lett=localStorage

               for (let index = 0; index <= lett.length; index++) {
                 
                    if(lett.key(index) === null) { 
                        console.log(index+" burası boş");
                        let sonuc= d.veri_ekle(takvim.getTime(),toplam_tarih,baslik.value,icerik.value)
                        window.location = window.location.href;
                    
                    }
                    else{
                        console.log(index+" buaralar dolu");
                    }
               }


               
                

})

/*orta alandaki ekleme kısmı*/