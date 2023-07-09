import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
import { ListTemplate } from './classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
console.log(form.children);
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// List tempalte instance
const ul = document.querySelector('.item-list');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
// Genericos: <T> (puede ser culquier cadena)
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOne = addUID({ name: 'andi', age: 45 });
console.log(docOne.name);
const docTwo = {
    uid: 1,
    resourceName: 'Person',
    data: { name: 'Shaun' },
};
const docThree = {
    uid: 2,
    resourceName: 'Person',
    data: 'Shaun',
};
const docFour = {
    uid: 3,
    resourceName: 'shoppingList',
    data: ['Carne', 'Pan', 'Leche', 'Huevos'],
};
[docTwo, docThree, docFour].forEach(doc => console.log(doc));
