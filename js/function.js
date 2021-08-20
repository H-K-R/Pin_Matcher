'use strict'

// To generate and show the pin
// When the pin will generate,  all the functionalities will be initialized.
function generatePin(){
    var pin=1000+ Math.floor(Math.random()*9000)
    displayGenerated.value= pin
    submitBtn.removeAttribute('disabled')
    leftTries=3
    displayGuessed.value=''
    document.getElementById("left-tries").className='action-left d-block'
    document.getElementById("notMatchedMessage").className='notify d-none'
    document.getElementById("matchedMessage").className ='notify d-none'
    document.getElementById("left-tries").innerText=`${leftTries} try left`
    blockInput()
}

// Show and set the guessed pin
function getSetPin(e){
    if((e.target.classList.contains('button')) && !(e.target.classList.contains('extra'))){
        if(displayGuessed.value.length<4){
            displayGuessed.value+=e.target.innerText
            blockInput()
        }
    }
}

// Function for the clicking of the submit button
function submitFunction(){
    if(displayGenerated.value===""){
        alert('Generate a pin first')
    }else if(displayGuessed.value === displayGenerated.value){
        document.getElementById("left-tries").className='action-left d-none'
        document.getElementById("notMatchedMessage").className='notify d-none'
        document.getElementById("matchedMessage").className ='notify d-block'
    }else{
        document.getElementById("left-tries").className='action-left d-block'
        document.getElementById("notMatchedMessage").className='notify d-block'
        document.getElementById("matchedMessage").className ='notify d-none'

        leftTries-=1
        if(leftTries===0){
            submitBtn.setAttribute('disabled', true)
        }
        document.getElementById("left-tries").innerText=`${leftTries} try left`
    }
}

// Blocking the inputs after crossing the limit
function blockInput(){
    if(displayGuessed.value.length>=4){
        displayGuessed.setAttribute('disabled', true) 
    }else{
        displayGuessed.removeAttribute('disabled')
    }
    
    if(displayGenerated.value.length>=4){
        displayGenerated.setAttribute('disabled', true) 
    }else{
        displayGenerated.removeAttribute('disabled')
    }
}