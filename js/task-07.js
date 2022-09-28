const inputRef = document.querySelector('#font-size-control')
console.log(inputRef);

const textRef = document.querySelector('#text')
console.log(textRef);

textRef.style.fontSize = `${inputRef.value}px`


const inputChange = (event) => {
const defaulFontSize = inputRef; 
textRef.style.fontSize =` ${event.target.value}px`  
}

inputRef.addEventListener('input', inputChange)