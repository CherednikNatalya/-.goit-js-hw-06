const refs = {
input:document.querySelector('#name-input'),
nameLable:document.querySelector('#name-output'),
}

console.log(refs.input);
const defaultNameLable = refs.nameLable.textContent;

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
    if (refs.input.value.trim() === ''){
        return defaultNameLable;
    } else 
    refs.nameLable.textContent = event.currentTarget.value;
}


