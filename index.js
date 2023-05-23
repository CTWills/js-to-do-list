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
    newItem.classList.add('size');
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
        // delete comment to test code console.log(newItem);
        }
    inputTextField.focus();
}

const checkedBox = (checking) => {
    let listItem = document.querySelector(`#${checking}`);
    let testCase = document.querySelector(`#${checking}1`);
    // delete comment to test code console.log(`#${checking}1`);
    // delete comment to test code console.log(testCase);
    if (testCase.checked) {
        listItem.classList.add('checked');
        console.log(listItem);
    } else {
        listItem.classList.remove('checked');
    }
}

const addHyphen = (string) => {
    let newString = string.replaceAll(' ', '-');
    inputTextValue = newString;
}

submitButton.addEventListener('click', buttonFunction);

inputTextField.addEventListener('input', (eventObject) => {
    inputTextValue = eventObject.target.value;
    addHyphen(inputTextValue);
})

todoList.addEventListener('change', (eventObject) => {
    checkedBoxValue = eventObject.target.value;
    checkedBox(checkedBoxValue);
})





