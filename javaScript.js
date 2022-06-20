let character = document.getElementById("character");
let block = document.getElementById("block");
let score = 0 + document.getElementById("score");
function jump(){
    if(character.classList != "animate")
    character.classList.add("animate");
    while(score < 3) {
        document.getElementById("score").innerHTML = score;
        score++;
    }
    setTimeout(function(){
        character.classList.remove("animate");
    },500);
}


let checkDead = setInterval(function(){
    let characterTop = parseInt(window.getComputedStyle(character).
    getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).
    getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>0 && characterTop>=130){
        block.style.animation = "none";
        block.style.display = "none";
        character.style.display = "none";
        document.getElementById("alert").innerHTML = "you lose";
    }
} ,10);

