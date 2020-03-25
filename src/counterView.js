export function getValueDomSetter() {
    return (value) => {
        document.querySelector('.numOfClick').textContent = value;
    }
}

export function clickListener(currentNumber) {
    return document.querySelector('.buttonSum').addEventListener('click', () => currentNumber);
}