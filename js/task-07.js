const elementRef = document.querySelector('#font-size-control');
const textElem = document.querySelector('#text')

const handleEvent = event => {
    console.log(elementRef.value);
    textElem.style.fontSize = elementRef.value+"px";
}

elementRef.addEventListener('input', handleEvent)