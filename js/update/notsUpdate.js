import build from "../workCreate.js"


let başlik=["Başlık alanı"]
let konu=["Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex omnis et, distinctio commodi accusamus iure laborum! Quasi, voluptatum soluta perspiciatis cupiditate quas quam dolore consectetur quo. Saepe fugiat tempora asperiores?"]


const update=document.getElementById("update")
/* input bailşk alanı*/
let nesne=new build();
let input=nesne.elementCreate("input",["inpt"])
input.type="text";
input.id="update_header";
input.placeholder=başlik[0]


/*textarea */
let nesne_textarea=new build();
let area=nesne.elementCreate("textarea")
area.id="input_txt";
area.textContent=konu[0]


/*update button */
let nesne_update_button=new build();
let buttn=nesne.elementCreate("button",["btn-update-button"])
buttn.id="update_btn";
buttn.textContent="Update Note"

update.appendChild(input)
update.appendChild(area)
update.appendChild(buttn)


