let allbt= document.querySelectorAll(".box");
var attempt; 
let counter = 0;
function toss(btn) {
    let t1 = document.querySelector("#toss_result");
    let rand = Math.random() * 10;
    if (rand >= 5) {
        t1.textContent="Player 1 Won";
        console.log(rand);
        attempt = "X";
        
    }
    else {
        t1.textContent="Player 2 Won";
        console.log(rand);
        attempt = "O";
    }   
    btn.setAttribute("disabled","true");
}

let winnerCondition = [
    ["box1", "box2", "box3"],
    ["box4", "box5", "box6"],
    ["box7", "box8", "box9"],
    ["box1", "box5", "box9"],
    ["box3", "box5", "box7"],
    ["box1", "box4", "box7"],
    ["box2", "box5", "box8"],
    ["box3", "box6", "box9"]
];


let checked = [];

let checkWinner = function()
{
    for(let winner of winnerCondition)
    {
        let classes = winner.map(e=>"."+e).join(","); //".box1, .box2, .box3" bhaiya aage dot lagana tha aur peeche comma
        let find = document.querySelectorAll(classes);
        let x = Array.from(find).every(e=>e.classList.contains("X"));
        let o = Array.from(find).every(e=>e.classList.contains("O"));
        if(x)
        {
            setTimeout(()=>{alert("Winner is X");}, 300)
            break;
        }
        if(o)
        {
            setTimeout(()=>{alert("Winner is O");}, 300)
            break;
        }
    }
}


function game_begin(btn){

    if(attempt)
    {
        btn.innerText = attempt;
        btn.classList.add(attempt)
        attempt = (attempt == "X") ? "O" : "X";
        btn.setAttribute("disabled", "true");
        counter++;
        let [,classN] = btn.classList;
        checked.push(classN);
    }
    else
        alert("Please Toss First")

    if(counter >= 5)
        checkWinner();

    
}