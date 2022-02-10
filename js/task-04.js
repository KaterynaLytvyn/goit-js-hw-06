const counterValue = document.querySelector('#value')
const decreaseValue = document.querySelector('button[data-action="decrement"]')
const increaseValue = document.querySelector('button[data-action="increment"]')


const decrease = () => {
    return counterValue.textContent = Number(counterValue.textContent) - 1;
}

const increase = () => {
    return counterValue.textContent = Number(counterValue.textContent) + 1;
}

decreaseValue.addEventListener("click", decrease);
increaseValue.addEventListener("click", increase);
