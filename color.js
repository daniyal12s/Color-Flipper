let but = document.querySelector("#butt");
let body = document.querySelector("body");
let para = document.querySelector("#pa");


const chooser = () => {
    let arr = ["Black","Red","Green","Purple","Blue"];
    let cho = Math.floor(Math.random()*5);
    return arr[cho];
}

     but.addEventListener("click",() => {
     let choice = chooser();
    //  let ans = console.log("Background",choice);
    //  console.log(ans);
     para.innerText = "Background Color = " + choice;
     body.style.backgroundColor = choice; 
        
    }) 
     






