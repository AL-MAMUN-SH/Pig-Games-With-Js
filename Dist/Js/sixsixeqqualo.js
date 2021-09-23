var scores,roundscore,activeplayer,gamePlaying;

initialize()
// dice = Math.floor(Math.random()*6)+1
// console.log(dice)
// document.querySelector('#current-'+ activeplayer).textContent = dice
// document.querySelector('#score--'+ activeplayer).innerHTML = '<em>' + dice + '</em>'
   var lastDice
document.querySelector('.btn--roll').addEventListener('click',function(){
    if(gamePlaying){
         //RANDOM NUMBER SET
    var dice = Math.floor(Math.random()*6)+1
    // DISPLAY THE RESULT
    var diceDom = document.querySelector('.dice')
     diceDom.style.display = 'block'
     diceDom.src='Dist/Picture/dice-'+dice+'.png'
    //  UPDATE The Round Score IF the ROLLED NUMBER Was NOt a 1
    if(dice===6 && lastDice ===6){
        scores[activeplayer] = 0 
        document.querySelector('#score-' + activeplayer).textContent = '0'
        Nextplayer()
    }else if(dice !==1){
        roundscore += dice
        document.querySelector('#current-'+ activeplayer).textContent = roundscore
    }else{
         Nextplayer()
    }
      lastDice = dice
    }
})
// Button Hold er Kaj Start
document.querySelector('.btn--hold').addEventListener('click',function(){
    if(gamePlaying){
        
    // Add current Score To Global Score

    scores[activeplayer] += roundscore

    // Update UI
    document.querySelector('#score-' + activeplayer).textContent = scores[activeplayer]
       // HERE IS TARGET VALUE INITIATED
       var input = document.querySelector('.final-score').value
       var winingscore
    //    validation

    //    UNDEFINE 0,null,String,Are COUrse FALSE VALUE
    if(input){
        winingscore = input
    }else{
        input = 100
    }  
    // Check Player Who will Win The Game 
    if(scores[activeplayer] >=winingscore){
        document.querySelector('#name-' + activeplayer).textContent = "Winner!"
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-' + activeplayer + '-panel').classList.add('winner')
        document.querySelector('.player-' + activeplayer + '-panel').classList.remove('active')
        gamePlaying = false
    }else{
        // Next Player
          Nextplayer()
    }
    }
})
//  NEW Button Er kaj

document.querySelector('.btn--new').addEventListener('click',initialize)

// Next Player Term ER Ektah Function

function Nextplayer(){
    activeplayer === 0 ? activeplayer = 1:activeplayer = 0
    roundscore = 0
    document.getElementById('current-0').textContent = '0'
    document.getElementById('current-1').textContent = '0'
       // CSS Add kore When i see Active Player added
   document.querySelector('.player-0-panel').classList.toggle('active')
   document.querySelector('.player-1-panel').classList.toggle('active')
   document.querySelector('.dice').style.display = 'none'
}
// NEW BUTTON ER SAME WOR TAI NOTUN EKTA FUNCTION 
function initialize(){
    scores = [0,0]
    roundscore = 0
    activeplayer = 0
    gamePlaying = true

    document.querySelector('.dice').style.display = 'none'
    document.getElementById("score-0").textContent = '0'
    document.getElementById("score-1").textContent = '0'
    document.getElementById("current-0").textContent = '0'
    document.getElementById("current-1").textContent = '0'
    document.getElementById('name-0').textContent = 'Player-1'
    document.getElementById('name-1').textContent = 'Player-2'
    document.querySelector('.player-0-panel').classList.remove('winner')
    document.querySelector('.player-1-panel').classList.remove('winner')
    document.querySelector('.player-0-panel').classList.remove('active')
    document.querySelector('.player-1-panel').classList.remove('active')
    document.querySelector('.player-0-panel').classList.add('active')
}