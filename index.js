// 1. Person needs to input a to-do item
// 2. The input needs to be added to a list the user sees
// 3. User needs to remove to-do items

let submitButton = document.querySelector('#submit-button');
let inputTextField = document.querySelector('#input-text')
let todoList = document.querySelector('#list');
let inputTextValue = '';


const buttonFunction = () => {
    (inputTextValue === '') ? alert('Please type into the box') : console.log(inputTextValue)
}

submitButton.addEventListener('click', buttonFunction);

inputTextField.addEventListener('input', (eventObject) => {
    inputTextValue = eventObject.target.value;
    return inputTextValue;
})
