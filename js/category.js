import Build from "./workCreate.js";

const categ=document.getElementById("category")

/*JSON çekilen veri  buradan alınacak ./js/json dosyası */
let category_head=["Geodenesli lorem ","Geodenesli lorem  ieieieieie ieiei eiei"]
let category_num=[6,2]


function frame_create() 
{
        let nesni=new Build();
        let frame1=nesni.elementCreate("div",["catg-h1","d-flex-row","d-flex-align-items", "d-flex-space-around"])
        let h1=nesni.elementCreate("h1")
        h1.textContent="Categories"

        let input=nesni.elementCreate("input")
        input.type="image"
        input.src="./assest/icon/icons8-plus-50.png" 

        frame1.appendChild(h1)
        frame1.appendChild(input)
    return frame1
}

function frame_create_two() {
    
let nesne_ul=new Build();
let frame2=nesne_ul.elementCreate("div",["catg-content"])
let ul=nesne_ul.elementCreate("ul")

let number=0;
category_head.forEach(ekle=>{
    let li=nesne_ul.elementCreate("li")
    let p=nesne_ul.elementCreate("p")
    let span=nesne_ul.elementCreate("span")
    span.textContent=category_num[number]

    p.textContent=ekle;
   

    li.appendChild(p)
    li.appendChild(span)
    ul.appendChild(li)
    number=number+1;
})

frame2.appendChild(ul)
return frame2
}


categ.appendChild(frame_create())
categ.appendChild(frame_create_two())



