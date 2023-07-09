import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
import { Formatter } from './interfaces/Formatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

// List tempalte instance
const ul = document.querySelector('.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  let doc: Formatter;
  if (type.value === 'invoice') {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, 'end');
});

// Genericos: <T> (puede ser culquier cadena)
const addUID = <O extends object>(obj: O) => {
  let uid = Math.floor(Math.random() * 1000);
  return { ...obj, uid };
};

let docOne = addUID({ name: 'andi', age: 45 });

console.log(docOne.name);

// genericos con interfaces
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const docTwo: Resource<object> = {
  uid: 1,
  resourceName: 'Person',
  data: { name: 'Shaun' },
};

const docThree: Resource<string> = {
  uid: 2,
  resourceName: 'Person',
  data: 'Shaun',
};

const docFour: Resource<string[]> = {
  uid: 3,
  resourceName: 'shoppingList',
  data: ['Carne', 'Pan', 'Leche', 'Huevos'],
};

[docTwo, docThree, docFour].forEach(doc => console.log(doc));
