let choiceBtn = document.querySelectorAll('.p-w')
let choice = ['paper','scissors','rock']
let ResultStatus = document.querySelector('.ResultStatus')
let score = document.querySelector('.score')
let playWrap = document.querySelector('.play-wrap')
let ResultWrap = document.querySelector('.result-wrap')
let userPick = document.querySelectorAll('.userPick')
let housePick = document.querySelectorAll('.housePick')
let rule = document.querySelector('.rule')

let userChoice;
let houseChoice;
let scoreValue= 0;



choiceBtn.forEach((item)=>{
    item.addEventListener('click',()=>{
        userChoice = item.getAttribute('data-userChoice')
        startGame()
        console.log(userChoice);
    })
})

function houseRandom(){
    return choice[Math.floor(Math.random() * choice.length)]
}

function startGame(){
    houseChoice = houseRandom()
    playWrap.style.display = 'none'
    ResultWrap.style.display = 'grid'
    console.log( 'index',choice.indexOf(houseChoice));
    housePick[choice.indexOf(houseChoice)].style.display = 'block'
    userPick[choice.indexOf(userChoice)].style.display = 'block'
    
    if(userChoice==houseChoice){
        ResultStatus.innerText = 'YOU DRAW'
    }else if(
        userChoice == 'rock' && houseChoice == 'scissors' ||
        userChoice == 'scissors' && houseChoice == 'paper' ||
        userChoice == 'paper' && houseChoice == 'rock'
        ){
            console.log('YOU WIN');
            ResultStatus.innerText = 'YOU WIN'
            updateValue(1)  
        }else{
            console.log('YOU LOSE');
            ResultStatus.innerText = 'YOU LOSE'
            updateValue(-1)
        }
}

function updateValue(value){
    scoreValue =scoreValue+value
    console.log(scoreValue);
    score.innerText = scoreValue
}
function playAgain(){
    playWrap.style.display = 'grid'
    ResultWrap.style.display = 'none'
    housePick[choice.indexOf(houseChoice)].style.display = 'none'
    userPick[choice.indexOf(userChoice)].style.display = 'none'
}
function ruleOpen(){
    rule.style.display = 'flex'
}
function ruleClose(){
    rule.style.display = 'none'
}