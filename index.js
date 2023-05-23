// 1. Person needs to input a to-do item
// 2. The input needs to be added to a list the user sees
// 3. User needs to remove to-do items

let submitButton = document.querySelector('#submit-button');
let inputTextField = document.querySelector('#input-text')
let todoList = document.querySelector('#list');
let inputTextValue = '';
let checkedBoxValue = '';

const createListItem = (textValue) => {
    let newItem = document.createElement('li');
    newItem.setAttribute('id', `${textValue}`)
    newItem.innerHTML = `
        <input type='checkbox' id='${textValue}1' name='${textValue}' value='${textValue}'/>
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

const checkedBox = (checking) => {
    let listItem = document.querySelector(`#${checking}`);
    let testCase = document.querySelector(`#${checking}1`);
    if (testCase.checked) {
        listItem.classList.add('checked');
    } else {
        listItem.classList.remove('checked');
    }
}


submitButton.addEventListener('click', buttonFunction);

inputTextField.addEventListener('input', (eventObject) => {
    inputTextValue = eventObject.target.value;
})

todoList.addEventListener('change', (eventObject) => {
    checkedBoxValue = eventObject.target.value;
    checkedBox(checkedBoxValue);
})





