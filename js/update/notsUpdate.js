import build from "../workCreate.js"
import jsonget from "../json/get_json.js"
import jsonset from "../json/setjson.js"


let konu=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis et, distinctio commodi accusamus iure laborum! Quasi, voluptatum soluta perspiciatis cupiditate quas quam dolore consectetur quo. Saepe fugiat tempora asperiores?"]

function name() {
    const person = {
        Tarih:"12/12/2022",
        Baslik: "deneme",
        İcerik: "icerik",
    }

    localStorage.setItem('user', JSON.stringify(person));

}

const update=document.getElementById("update")

/* input bailşk alanı*/
function input_header() {

    let nesne=new build();
    let input=nesne.elementCreate("input",["inpt"])
    input.type="text";
    input.id="update_header";
    return input
}
/*textarea */
function textarea() {
    let nesne=new build();
    let area=nesne.elementCreate("textarea")
    area.id="input_txt";
    return area
}
/*update button */
function update_btn() {
    let nesne=new build();
    let buttn=nesne.elementCreate("button",["btn-update-button"])
    buttn.id="upd_btn";
    buttn.textContent="Update Note"

    buttn.addEventListener('click',()=>{
                
       
                let baslik=document.getElementById("update_header")
                let konu=document.getElementById("input_txt")



                if (baslik.value !=="" && konu.value !=="") {

                    let takvim=new Date()
                    let gün=takvim.getUTCDay()
                    let ay=takvim.getMonth()
                    let yil=takvim.getFullYear()

                    let toplam_tarih=gün+"."+ay+"."+yil


                   let f=new jsonset()
                   
               let key=konu.getAttribute("idnumber")

              f.veri_ekle(key,toplam_tarih,baslik.value,konu.value)
              window.location = window.location.href;

        
                } 
                else {
                alert("tum alanları doldurunuz")
}
    })




    return buttn
}


update.appendChild(input_header())
update.appendChild(textarea())
update.appendChild(update_btn())


