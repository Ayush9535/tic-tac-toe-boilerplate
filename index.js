// 1. Declare all the variables 
let winningCombinations = [
    [0,1,2],
    [3,4,5],
    [6,7,8],

    [0,3,6],
    [1,4,7]
    [2,5,8],
    
    [0,4,8],
    [2,4,6],
]

const boxElements = document.querySelectorAll(".box")
const message = document.getElementById("message")
const playAgain = document.getElementById("button")
const result = document.getElementById("result")

var clickCount = 0;
let xAttempt = [];
let oAttempt = [];

let winner = 0;


// 2. Onclick Function 
boxElements.forEach((el , i , arr)=>{

    el.addEventListener("click" , ()=>{
        handleClick(event)
    })
})

function handleClick(e){
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)

    let i = e.target.id;

    let p = document.createElement("p")
    p.setAttribute("id" , "text")
    p.style.color = "Black"

    boxElements[i-1].append(p)

    if ((clickCount) % 2 === 0){

        p.innerHTML = "X"
        xAttempt.push(parseInt(i-1))
        resultfunc(winningCombinations , xAttempt , "X")

    }else if ((clickCount) % 2 !== 0){

        p.innerHTML = "O"
        oAttempt.push(parseInt(i-1))
        resultfunc(winningCombinations , oAttempt , "O")

    }

    clickCount++;

    // Check if Tie 

    if ((clickCount === 9) || (winner = 0)){
        result.style.visibility = "visible";
        message.innerHTML = "Its a Tie"
    }
}

// 3. Result function

function resultfunc(winningCombinations , attempts , player){
    let count = 0;
    let checker = [];

    for (let i=0 ; i<winningCombinations.length ; i++){
        if (Array.isArray(winningCombinations[i])){
            resultfunc(winningCombinations[i] , attempts , player)
        }
        else{
            if(attempts.includes(winningCombinations[i])){
                checker.push(true)
                count ++
            }
            else{
                checker.push(false)
            }
        }
    }
    console.log(checker)
    if (checker.every(el => el === true) && count>2){
        console.log("done")
        result.style.visibility = "visible"
        message.innerHTML = "The winner is "+ player;
        winner = 1
    } 
}


// 4. Restart function

playAgain.onclick = () =>{
    window.location.reload()
}