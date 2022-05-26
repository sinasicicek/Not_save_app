import build from "../workCreate.js";
import getr from "../json/get_json.js"
//import upftNot from "../addNote/updateNotAdd.js"

const notes=document.getElementById("notes");

/*JSON dosyaları buradan alınacak */
let tarih=[]
let baslik=[]
let konu=[]
let localS=getr()

let number=0

localS.forEach(element => {

    let gg=getr()
    gg.forEach(nesneFizi => {
        tarih.push(nesneFizi.Tarih)
        baslik.push(nesneFizi.baslik)
        konu.push(nesneFizi.icerik)

    });



   
        /*"notApp-info-header"*/
        function div_notTxt_info_header()
        {
            let nesne=new build();
                let div_notTxt_info_header=nesne.elementCreate("div",["notApp-info-header", "d-flex-row", "d-flex-space-around"])
                let div_notTxt_info_header_span=nesne.elementCreate("span")
                    div_notTxt_info_header_span.textContent=tarih[0]
                    let div_notTxt_info_header_img=nesne.elementCreate("img")
                        div_notTxt_info_header_img.src="./assest/icon/icons8-delete-80.png"

                div_notTxt_info_header.appendChild(div_notTxt_info_header_span)
                div_notTxt_info_header.appendChild(div_notTxt_info_header_img)
                return  div_notTxt_info_header
        }

        /*notApp-info-txt*/
        function div_not_app_info_txt()
        {
            let nesne=new build();
                    let div_not_app_info_txt=nesne.elementCreate("div",["notApp-info-txt"])
                    let h1=nesne.elementCreate("h1")
                    h1.textContent=baslik[number]
                    let div_app_info_p=nesne.elementCreate("p")
                    div_app_info_p.textContent=konu[number]
                    div_not_app_info_txt.appendChild(h1)
                    div_not_app_info_txt.appendChild(div_app_info_p)
                    return div_not_app_info_txt
        }

        /*Notlar bu alana eklenecek  */
        let nesne=new build();
        let div_notTxt=nesne.elementCreate("div",["notApp-txt"])

        /*isimsiz div*/
        /*bu alana id ve*/
        let div_notTxt_frame=nesne.elementCreate("div",["notClick"])
        div_notTxt_frame.id=localStorage.key(number)
        
        div_notTxt_frame.addEventListener('click',function(){

            let if_number=this.id

            let objct=  JSON.parse(localStorage.getItem(if_number))
           
            let open=document.getElementById("update")
            let baslik=document.getElementById("update_header")
            let konu=document.getElementById("input_txt")
            konu.setAttribute("idNumber",if_number)
        
            baslik.value=objct.baslik
            konu.value=objct.icerik
            
            open.style.display="flex"
        
        })
        
        div_notTxt_frame.appendChild(div_notTxt_info_header());
        div_notTxt_frame.appendChild(div_not_app_info_txt());
        div_notTxt.appendChild(div_notTxt_frame);
       

      
        notes.appendChild(div_notTxt)

        number=number+1

});




  

