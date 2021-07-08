let score = document.querySelector('.score')
let wrap = document.querySelector('.wrap')
let match = document.querySelector('.match')
let ResultStatus = document.querySelector('.ResultStatus')
let userPickedItem = document.querySelectorAll('.user')
let housePickedItem = document.querySelectorAll('.house')
let rules = document.querySelector('.rules')
let startedStatus = false
let userChoice;
let scoreValue= 0

let choice = ['paper','scissors','rock']

function randomChoice() {
    return choice[Math.floor ( Math.random() * choice.length )]
}

let userPicked = document.querySelectorAll('.user-picked')

userPicked.forEach((data)=>{
    data.addEventListener('click',()=>{
        userChoice = data.getAttribute('data-userChoice')
        startGame(userChoice)
        
    })
})

function startGame(userChoice) {
    housePicked = randomChoice()
    console.log('You picked '+" "+userChoice);
    console.log('House picked '+" "+ housePicked);
    wrap.style.display = 'none'
    userPickedItem[choice.indexOf(userChoice)].style.display = 'block'
    housePickedItem[choice.indexOf(housePicked)].style.display = 'block'
    match.style.display = 'flex'
    if(userChoice==housePicked){
        console.log('draw');
        ResultStatus.innerText = 'DRAW'
    }else if(
        userChoice == 'rock' && housePicked == 'scissors' ||
        userChoice == 'scissors' && housePicked == 'paper' ||
        userChoice == 'paper' && housePicked == 'rock'
        ){
            ResultStatus.innerText = 'YOU WIN'
            updateValue(1)  
        }else{
            ResultStatus.innerText = 'YOU LOSE'
            updateValue(-1)
        }
}

function updateValue(value){
    scoreValue =scoreValue+value

    score.innerText = scoreValue
}
function playAgain(){
    wrap.style.display = 'flex'
    match.style.display = 'none'
    userPickedItem[choice.indexOf(userChoice)].style.display = 'none'
    housePickedItem[choice.indexOf(housePicked)].style.display = 'none'
}
function ShowRules(){
    rules.style.display ='flex'
}
function closeRules(){
    rules.style.display ='none'
}