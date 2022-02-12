const inputData = document.querySelector('#validation-input');
const dataLength = inputData.getAttribute('data-length')


const handleInput = event => {
    inputData.classList.remove('valid', 'invalid')

    if (event.currentTarget.value.length === Number(dataLength)) {
        inputData.classList.add('valid') 
    }
    else {
        inputData.classList.add('invalid') 
    }
}

inputData.addEventListener("blur", handleInput);