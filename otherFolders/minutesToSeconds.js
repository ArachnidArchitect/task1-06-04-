let input = document.querySelector('input')
let button = document.querySelector('button')
let display = document.querySelector('#display')
display.innerText = "Answer will display here"

button.addEventListener('click', ()=>{
    minutesToSeconds(input.value)
})
function minutesToSeconds(minutes){
    display.innerText = "Answer will display here"
   answer = minutes + ' minute(s) is '+(minutes * 60) + ' seconds'
   console.log("")
   display.innerText = answer

}
minutesToSeconds(5)