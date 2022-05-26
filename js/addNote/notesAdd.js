let add=document.getElementById("add_note")
const frame=document.getElementById("winfFrame")

let control=true;
add.addEventListener('click',()=>{
    console.log("1");
    if(control){
        console.log("2");
        frame.classList.add("open")
        control=false
    }
    else{
        console.log("3");
    }
    
})