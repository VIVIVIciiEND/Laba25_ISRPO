import { greet , add ,PI  } from "./utils";
// console.log("\n=== Деструктуризация массивов ===");
// const colors = ["red" , "green" , "blue"];
// const color1 = colors[0];
// const color2 = colors[1];
// console.log(color1 , color2);
// const [firstColor , secondColor , thirdColor] = colors ; 
// console.log(firstColor , secondColor , thirdColor);
// const [primary ,  , tertiary] = colors ; 
// console.log(primary , tertiary) ; 
// const [c1,c2,c3, c4 = "yellow"] = colors ; 
// console.log(c4); 
// console.log("деструктуризация объектов");
// const user ={
//     name : "алиса" ,
//     age : 25 ,
//     city : "москва" ,
// };
// const {name , age , city} = user ; 
// console.log(name , age , city);
// const {name : fullName, age : years} = user ;
// console.log(fullName , years) ; 
// const {name : personName , country = "Россия"} = user ; 
// console.log(personName , country);
// console.log("деструктуризация в параметрах");
// const user ={
//     name : "алиса" ,
//     age : 25 ,
//     city : "москва" ,
// };
// function printUser({name , age , city}){
//     console.log(`${name}`);
//     console.log(`${age}`);
//     console.log(`${city}`);
// }
// printUser(user);
// console.log();
// printUser(user);
// console.log("Spread для массивов");
// const arr1 = [1,2,3] ;
// const arr2 = [4,5,6]; 
// const combined = [...arr1, ...arr2];
// console.log("объедиенный массив: " , combined) ; 
// const copy = [...arr1];
// console.log("копия массива:" , copy) ; 
// const extended = [0 , ...arr1 , 7,8] ; 
// console.log("расширенный массив" , extended) ; 
// console.log("Spread для объектов")
// const person ={
//     name : "иван" , 
//     age : 30, 
// };
// const address = {
//     city: "санкт-петербург" , 
//     street : "невский проспект" , 
// };
// const fullInfo = {...person , ...address} ; 
// console.log("полная инфмормация:" , fullInfo);
// const personCopy ={...person};
// console.log("копия объекта" , personCopy) ;
// const updated = {...person , age: 31 , occupation: "Developer"};
// console.log("обновленный обьект: " , updated);
// console.log("Rest оператор");
// function sum(...numbers){
//     return numbers.reduce((total , num) => total +num , 0) ;
// }
// console.log("сумма 1,2,3" , sum(1,2,3));
// console.log("сумма 1,2,3,4,5"  , sum(1,2,3,4,5));
// const numbers = [10,20,30,40,50] ;
// const [first , second , ...rest] = numbers;
// console.log("первое число" , first) ; 
// console.log("второе число" , second) ;
// console.log("остальные числа" , rest);
//ЗАДАНИЕ 1 
// const arr1 = [1,2,3] ;
// const arr2 = [4,5,6]; 
// const arr3 = [...arr1,...arr2];
// function findMax(...numbers){
//     return Math.max(...numbers);
// };
// const obj1 = { name: "Dinara" };
// const obj2 = { age: 18 };
// const obj3 = {...obj1 , ...obj2};
// console.log("модули") ; 
// console.log(greet("алексей")) ; 
// console.log("5+3=", add(5,3));
// import { multiply as умножить } from "./utils.js";
// console.log("4*7" , умножить(4,7));
// import * as Utils from "./utils.js";
// console.log(Utils.greet("Мария"));
// console.log("умножение" , Utils.multiply(3,9));


// import {square , cube , E} from "./math.js";
// console.log(square(3));
// console.log(cube(1));
// console.log(E);

console.log("промисы");
const simplePromise = new Promise((resolve , reject) =>{
    const success = true ;
    if(success){
        resolve("операция выполнена успешно");
    } else {
        reject("произошла ошибка");
    }
});
simplePromise
.then((result) => console.log("результат" , result))
.catch((error) => console.log("ошибка" , error ));
function delay(ms){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(`прошло ${ms} миллисекунд`);
        } , ms);
    });
}
delay(1000)
.then((message) => console.log(message));
function fetchUserData(userId){
    return new Promise((resolve , reject) => {
        setTimeout(()=>{
            if(userId >0){
                resolve ({
                    id : userId , 
                    name: "иван Иванов" , 
                    email: "ivan@exaple.com",
                });
            }else {
                reject("неверный id пользователя");
            }
        }, 1500);
    })
}
fetchUserData(1)
.then ((user) => console.log("пользователь" , user))
.catch((error) => console.log("ошибка", error));
function step1(){
    return new Promise((resolve) =>{
        setTimeout(() => resolve("шаг 1 заверше") , 500);
    });
}
function step2(previousResult){
    return new Promise((resolve) => {
        setTimeout(()=> resolve(`${previousResult} -> шаг 2 завершен`) , 500);
    });
}
function step3(previousResult){
    return new Promise((resolve) => {
        setTimeout(() => resolve(`${previousResult} -> шаг 3 завершен`) , 500);
    });
}
step1()
.then((result1) => step2(result1))
.then((result2) => step3(result2))
.then((finalResult) => console.log("финальный результат" , finalResult))
.catch((error) => console.log("ошибка в цепочке" , error));

function checkInventory(Name) {
    return new Promise((resolve, reject) => {
        const inventory = ["Телефон", "Ноутбук", "Планшет"];
        setTimeout(() => {
            if (inventory.includes(Name)) {
                resolve(`Товар ${Name} в наличии`);
            } else {
                reject(`Товар ${Name} не найден`);
            }
        }, 1000);
    });
}