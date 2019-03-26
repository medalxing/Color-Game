let numSquares=6;
let colors=[];
let pickedColor;
let squares= document.querySelectorAll(".square");
let colorDisplay=document.getElementById("colorDisplay");
let messageDisplay=document.querySelector("#message");
let h1=document.querySelector("h1");
let resetButton=document.querySelector("#reset");
let modeBtns=document.querySelectorAll(".mode");

init();

function init(){
    setupModeBtns();
    setupSquares();
    reset();
}

function setupModeBtns(){
    for(let i=0;i<modeBtns.length;i++ ){
        modeBtns[i].addEventListener("click", function(){
            modeBtns[0].classList.remove("selected");
            modeBtns[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent==="Easy"? numSquares=3:numSquares=6;
            reset();
        })
    }
}
function setupSquares(){
    for(let i=0;i<squares.length;i++){
        squares[i].addEventListener("click", function(){
            let clickedColor=this.style.backgroundColor;
            if (clickedColor===pickedColor){
                messageDisplay.textContent="Correct!"
                resetButton.textContent="Play Again?"
                changeColors(clickedColor);
                h1.style.backgroundColor=clickedColor;
            }
            else{
                this.style.backgroundColor="#232323";
                messageDisplay.textContent="Try Again!"
            }
        })
    }

}
function reset(){
    messageDisplay.textContent="";
    colors=generateRandomColors(numSquares);
    pickedColor=pickColor();
    colorDisplay.textContent=pickedColor;
    resetButton.textContent="New Colors"
    for(let i=0;i<squares.length;i++){
        if(colors[i]){
            squares[i].style.display="block";
            squares[i].style.backgroundColor=colors[i]; 
        }
        else{
            squares[i].style.display="none";
        }
    }
    h1.style.backgroundColor="steelblue";

}

resetButton.addEventListener("click", function(){
    reset();
})

function changeColors(color){
    for(let i=0;i<squares.length;i++){
        squares[i].style.backgroundColor=color;
    }
}

function pickColor(){
    let random=Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(n){
    let arr=[]
    for (let i=0;i<n;i++){
        arr.push( randomColor());
    }
    return arr;
}

function randomColor(){
    let red=Math.floor(Math.random() * 256);
    let green=Math.floor(Math.random() * 256);
    let blue=Math.floor(Math.random() * 256);
    return "rgb("+red+", "+green+", "+blue+")";
}