import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/Payments.js';
import { Formatter } from './interfaces/Formatter.js';
import { ListTemplate } from './classes/ListTemplate.js';

const form = document.querySelector('.new-item-form') as HTMLFormElement;
//console.log(form.children);

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

// Enums
enum ResourceType {
  BOOK,
  AUTHOR,
  FILM,
  DIRECTOR,
  PERSON,
  DINOSAUR,
}

interface Resource<T> {
  uid: number;
  resourceType: ResourceType;
  data: T;
}

const docOne: Resource<object> = {
  uid: 1,
  resourceType: ResourceType.FILM,
  data: { title: 'name of the wind' },
};

const docTwo: Resource<object> = {
  uid: 10,
  resourceType: ResourceType.DINOSAUR,
  data: { name: 'yoshi' },
};

[docOne, docTwo].forEach(doc => console.log(doc));
