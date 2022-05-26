import build from "../workCreate.js"
import jsonget from "../json/get_json.js"

let başlik=["Başlık alanı"]
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
    input.placeholder=başlik[0]
    return input
}
/*textarea */
function textarea() {
    let nesne=new build();
    let area=nesne.elementCreate("textarea")
    area.id="input_txt";
    area.textContent=konu[0]
    return area
}
/*update button */
function update_btn() {
    let nesne=new build();
    let buttn=nesne.elementCreate("button",["btn-update-button"])
    buttn.id="update_btn";
    buttn.textContent="Update Note"
    return buttn
}


update.appendChild(input_header())
update.appendChild(textarea())
update.appendChild(update_btn())


