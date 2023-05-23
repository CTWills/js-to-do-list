// 1. Person needs to input a to-do item
// 2. The input needs to be added to a list the user sees
// 3. User needs to remove to-do items

let submitButton = document.querySelector('#submit-button');
let inputTextField = document.querySelector('#input-text')
let todoList = document.querySelector('#list');
let inputTextValue = '';

const createListItem = (textValue) => {
    let newItem = document.createElement('li');
    newItem.innerHTML = `
        <id = '${textValue}' />
        <input type='checkbox' name='${textValue}' value='${textValue}'/>
        <label for='${textValue}'>${textValue}</label>
    `
    return newItem;
}

const buttonFunction = () => {
    if (inputTextValue == '') {
        alert('Please type into the box')
    } else {
        let newItem = createListItem(inputTextValue);
        todoList.appendChild(newItem);
    }
    inputTextField.focus();
}

submitButton.addEventListener('click', buttonFunction);

inputTextField.addEventListener('input', (eventObject) => {
    inputTextValue = eventObject.target.value;
})
