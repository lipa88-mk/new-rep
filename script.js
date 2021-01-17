let nameField = document.querySelector('.name-field');
let helloPar = document.querySelector('.hello');

nameField.addEventListener('input', function () {
    console.log(nameField.value);
    helloPar.textContent = "Привет, " + nameField.value;
});

//Задача Подсчет зарплаты 

let salaryField = document.querySelector('.salary-field');
let salaryResult = document.querySelector('.salary-result');

salaryField.addEventListener('input', function () {

    if (salaryField.value < 100000) {
        salaryResult.textContent = salaryField.value * 0.65;
    } else {
        salaryResult.textContent = salaryField.value * 0.55;
    }

});


//

let selectList = document.querySelector('.select-list');

selectList.addEventListener('change', function () {
    console.log('смена выбора');
});


let checkboxList = document.querySelectorAll('.checkbox');

for (let i = 0; i < checkboxList.length; i++) {

    checkboxList[i].addEventListener('change', function () {
        console.log('смена выбора');

        if (checkboxList[i].checked) {
            console.log('+');
        } else {
            console.log('-');
        }

    });
}


//
let filter = document.querySelector('.filter');
let newsList = document.querySelectorAll('.news-item');

filter.addEventListener('change', function () {

    for (let i = 0; i < newsList.length; i++) {

        if (filter.value != newsList[i].dataset.category) {
            newsList[i].classList.add('hidden');
        } else {
            newsList[i].classList.remove('hidden');
        }

        if (filter.value === 'all') {
            newsList[i].classList.remove('hidden');
        }


    }

});

//Список дел
let todoList = document.querySelector('.todo');
let todoField = document.querySelector('.todo-field');
let todoBtn = document.querySelector('.add-todo');

todoBtn.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let newLi = document.createElement('li');
    newLi.classList.add('todo-item');
    newLi.textContent = todoField.value;
    console.log(todoField.value);
    console.log(newLi);
    todoList.append(newLi);

    todoField.value = '';
});

//валидация формы
let userName = document.querySelector('[name="userName"]');
console.log(userName);

userName.addEventListener('invalid', function (evt) {
    userName.classList.add('invalid-field');

    if (userName.validity.tooShort) {
        userName.setCustomValidity('Мало символов');
    } else if (userName.validity.valueMissing) {
        userName.setCustomValidity('Обязательно!');
    } else {
        userName.setCustomValidity('');
    }
});

userName.addEventListener('input', function (evt) {
    let target = evt.target;
    if (target.value.length < 2) {
        target.setCustomValidity("Мало символов");
    } else {
        target.setCustomValidity("");
    }

});


userName.addEventListener('valid', function (evt) {
    userName.classList.remove('invalid-field');
});