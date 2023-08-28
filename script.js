const body = document.querySelector("body")
const boxes = document.querySelectorAll(".box")
const h2 = document.querySelector("h2")

boxes.forEach((box) => {
    box.addEventListener("click",function(e) {
        // console.log(e.target)
        body.style.backgroundColor = e.target.id 
        h2.innerText = (e.target.id)
        h2.style.textTransform = capitalize;
        
        // switch (e.target.id) {
        //     case "gray": 
        //         body.style.backgroundColor = e.target.id  
        //         break;
        //     case "yellow": 
        //         body.style.backgroundColor = e.target.id  
        //         break;
        //     case "seagreen": 
        //         body.style.backgroundColor = e.target.id  
        //         break;
        //     case "salmon": 
        //         body.style.backgroundColor = e.target.id  
        //         break;
        
        //     default:
        //         console.log("error");
        //         break;
        // }
        // body.style.backgroundColor = e.target.id;
    })
})