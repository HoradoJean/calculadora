const buttons = document.querySelectorAll('[data-char]')
const equals = document.getElementById('equals')
const clear = document.getElementById('clear')
const clearAll = document.getElementById('clear-all')
const output = document.getElementById('output')

buttons.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        if(output.innerHTML.length >= 11){
            alert('a lot of chars')
            output.innerHTML = ''
        }
        output.innerHTML += btn.innerHTML
    })
})

equals.addEventListener('click', ()=>{
    output.innerHTML = eval(output.innerHTML)
})

clear.addEventListener('click', ()=>{
    output.innerHTML = output.innerHTML.slice(0, -1)
})

clearAll.addEventListener('click', ()=>{
    output.innerHTML = ''
})