
let boxes = document.querySelectorAll(".box");//array of all the boxes
let resetbtn = document.querySelector("#reset");

//to decide whose turn it is
let turnO = true;//initially game starts from playerO

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [6,4,2]
];

// to display the winning message , initially  it was just hidden
//just after a winner is found it is set to visible
//same thing can be implemnted in html itself
let msg = document.createElement("div");
msg.style.textAlign = "center";
msg.style.color = "#336699";
msg.style.marginTop = "50px";
msg.style.marginBottom = "5px";
msg.style.fontSize = "30px";
msg.style.fontWeight = "500";


const checkWinner = () =>{
    for (let pattern of winPatterns){
        // console.log(pattern);
        let p0 = boxes[pattern[0]].textContent;
        let p1 = boxes[pattern[1]].textContent;
        let p2 = boxes[pattern[2]].textContent;

        if(p0 != "" && p1 != "" && p2 != ""){
            if(p0 == p1 && p1 == p2){
                console.log("Match is won by ",p0);
                msg.textContent = `Match is won by ${p0}`
                document.querySelector(".gamearea").after(msg);
                msg.style.visibility = "visible";
                boxes.forEach((box)=>{
                    box.disabled = true;
                })

            }
        }
    }
}

boxes.forEach((box,i)=>{
    box.addEventListener("click", () =>{
        // console.log("box was clicked!");

        if(turnO){
            box.textContent = "O";
            console.log("O just did his turn on ",i);
            turnO = false;
        }
        else{
            box.textContent = "X";
            console.log("X just did his turn on ",i);
            turnO = true;
        }

        //so that again entry is not allowed, button is disabled 
        box.disabled = true;

        checkWinner();
    });
});


resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.textContent = ""; // Clear the UI
        box.disabled = false;
    });
    turnO = true; // Reset turn to O
    msg.style.visibility = "hidden";
    console.log("Game has been reset");
});


//future scope ----> i could have implemented the logic of tie case , using the count = 9
