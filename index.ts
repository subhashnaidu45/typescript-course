let message = 'subhash';
console.log(message);

let x = 20;
const y = 35;
// let x = 45;
// y=45;

let isMatched: boolean = true;
let id: number = 45;
let firstname: string = 'subhash';
let sentence: string = `My name is ${firstname}
And I am noob in Typescript and angular`;

let isClicked: boolean = null;
let Lname: string = null;
let myName: string = undefined;
let isUndefined: string = undefined;

// here in ts null & undefined data types are consider as sub types of all the other types as they can be assigned to any other type;

//declaring of Array type it can be done using 2 syntaxes;

let list1: number[] = [1, 2, 45];
let list2: Array<number> = [1, 3, 4, 5];

console.log(list1);
console.log(list2);

//now lets discuss about assigning different types of data in one array , this can be done using Tuple concept which is introduced by typescript

let person: [string, number] = ['Ayyagaru', 45];
console.log(person);

// now lets discuss about enum type which is used to give friendly names to set of numerical values

enum department {
  Dcs,
  DL = 9,
  CL,
  QualityLeap,
}

let d = department.CL;
console.log(d);
console.log(sentence);

//any type
let randomValue: any = 10;
randomValue = 'subhash';
randomValue = true;

let RandomVariable: any = 45;
console.log(RandomVariable.name);
// RandomVariable();
// RandomVariable.toUpperCase();
// Not even a single error will populate when the variable is assigned to any type at the compile type it will populate error in run time

let randomitem: unknown = 25;
// unknown type is introduced in angular 3.0 if we declare a variable with unknown and try the above functions and then we get errors at compile time itself

function hasName(obj: any): obj is { name: string } {
  return !!obj && typeof obj == 'object' && 'name' in obj;
}
if (hasName(randomitem)) {
  console.log(randomitem.name);
}
// this is about the unknown type need to comback here to understand this function again
// -> type inference
let a;
a = 45;
a = true;
// here no error is occured and also we can assign them to any other type as the value is not initialized at the beginning

let b = 45;
// b = false; here the error populates as we initialized the value at the time of declaration itself it takes the type of first value which is initialized

// union of types of same variable

let age: number | string;
age = 45;
age = 'forty five';

//functions
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 6));

function add1(num1: number, num2: number = 25): number {
  if (num2) {
    return num1 + num2;
  } else return num1;
}
console.log(add1(5));

// function add2(num1?: number, num2: number): number {
//   if (num2) {
//     return num1 + num2;
//   } else return num1;
// }
// console.log(add2(5));

// optional parameters need to be follow after required parameters

// function fullName(person: { firstName: string; lastName: string })

interface Person {
  firstName: string;
  lastName: string;
}
function fullName(person: Person) {
  console.log(`${person.firstName} ${person.lastName}`);
}
let p = {
  firstname: 'ayya',
  lastname: 'garu',
};

// fullName(p);

class Employee {
  employeeName: string;
  constructor(Name: string) {
    this.employeeName = Name;
  }
  greet() {
    console.log(`Good Morning ${this.employeeName}`);
  }
}

let emp1 = new Employee('subhash');
console.log(emp1.employeeName);
emp1.greet();
