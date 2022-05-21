import build from "../workCreate.js";

const notes=document.getElementById("notes");

/*JSON dosyaları buradan alınacak */
let tarih=["12.11.2022"]
let baslik=["Geodenesli Lorem"]
let konu=[
 "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis et, distinctio commodi accusamus iure laborum! Quasi, voluptatum soluta perspiciatis cupiditate quas quam dolore consectetur quo. Saepe fugiat tempora asperiores",
"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis et, distinctio commodi accusamus iure laborum! Quasi, voluptatum soluta perspiciatis cupiditate quas quam dolore consectetur quo. Saepe fugiat tempora asperiores"]


konu.forEach(element => {
    console.log(element);

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
                    h1.textContent=baslik[0]
                    let div_app_info_p=nesne.elementCreate("p")
                    div_app_info_p.textContent=konu[0]
                    div_not_app_info_txt.appendChild(h1)
                    div_not_app_info_txt.appendChild(div_app_info_p)
                    return div_not_app_info_txt
        }

        /*Notlar bu alana eklenecek  */
        let nesne=new build();
        let div_notTxt=nesne.elementCreate("div",["notApp-txt"])

        /*isimsiz div*/
        /*bu alana id ve*/
        let div_notTxt_frame=nesne.elementCreate("div")
        div_notTxt_frame.id="id_yazılacak"
        
        div_notTxt_frame.appendChild(div_notTxt_info_header());
        div_notTxt_frame.appendChild(div_not_app_info_txt());
        div_notTxt.appendChild(div_notTxt_frame);

      
        notes.appendChild(div_notTxt)

});




  

