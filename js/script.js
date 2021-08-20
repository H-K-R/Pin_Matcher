'use strict'

// Assignation of all the selectors
const buttons= document.querySelector('.calc-body')
const generateBtn= document.querySelector('.generate-btn')
const clearBtn= document.querySelector('#clear')
const backspace= document.querySelector('#delete')
const submitBtn= document.querySelector('.submit-btn')
const displayGenerated= document.querySelector('#displayGenerated')
const displayGuessed= document.querySelector('#displayGuessed')

var leftTries=3

//Generate pin by clicking the generate pin button
generateBtn.addEventListener('click', generatePin)


// Show and set the guessed pin
buttons.addEventListener('click',getSetPin)

// Clear button
clearBtn.addEventListener('click',()=>{
      displayGuessed.value='' 
      blockInput()  
})

//Backspace button
backspace.addEventListener('click',()=>{
    displayGuessed.value=displayGuessed.value.slice(0,-1)
    blockInput()
})

// Functionality of submit button
submitBtn.addEventListener('click', submitFunction)

// Blocking the inputs after crossing the limit
displayGuessed.addEventListener('input', blockInput)
displayGenerated.addEventListener('input', blockInput)