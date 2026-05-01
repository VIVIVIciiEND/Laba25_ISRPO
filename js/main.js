// import { greet , add ,PI  } from "./utils";
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

// console.log("промисы");
// const simplePromise = new Promise((resolve , reject) =>{
//     const success = true ;
//     if(success){
//         resolve("операция выполнена успешно");
//     } else {
//         reject("произошла ошибка");
//     }
// });
// simplePromise
// .then((result) => console.log("результат" , result))
// .catch((error) => console.log("ошибка" , error ));
// function delay(ms){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve(`прошло ${ms} миллисекунд`);
//         } , ms);
//     });
// }
// delay(1000)
// .then((message) => console.log(message));
// function fetchUserData(userId){
//     return new Promise((resolve , reject) => {
//         setTimeout(()=>{
//             if(userId >0){
//                 resolve ({
//                     id : userId , 
//                     name: "иван Иванов" , 
//                     email: "ivan@exaple.com",
//                 });
//             }else {
//                 reject("неверный id пользователя");
//             }
//         }, 1500);
//     })
// }
// fetchUserData(1)
// .then ((user) => console.log("пользователь" , user))
// .catch((error) => console.log("ошибка", error));
// function step1(){
//     return new Promise((resolve) =>{
//         setTimeout(() => resolve("шаг 1 заверше") , 500);
//     });
// }
// function step2(previousResult){
//     return new Promise((resolve) => {
//         setTimeout(()=> resolve(`${previousResult} -> шаг 2 завершен`) , 500);
//     });
// }
// function step3(previousResult){
//     return new Promise((resolve) => {
//         setTimeout(() => resolve(`${previousResult} -> шаг 3 завершен`) , 500);
//     });
// }
// step1()
// .then((result1) => step2(result1))
// .then((result2) => step3(result2))
// .then((finalResult) => console.log("финальный результат" , finalResult))
// .catch((error) => console.log("ошибка в цепочке" , error));

// function checkInventory(Name) {
//     return new Promise((resolve, reject) => {
//         const inventory = ["Телефон", "Ноутбук", "Планшет"];
//         setTimeout(() => {
//             if (inventory.includes(Name)) {
//                 resolve(`Товар ${Name} в наличии`);
//             } else {
//                 reject(`Товар ${Name} не найден`);
//             }
//         }, 1000);
//     });
// }

// console.log("Async/Await");
// async function greet(){
//     return "Привет!";
// }
// greet().then((message) => console.log(message));
// function getWeather(){
//     return new Promise((resolve) => {
//         setTimeout(()=>{
//             resolve({temp: 22 , condition : "Солнечно"});
//         } , 1000);
//     })
// }
// async function showWeather(){
//     console.log("загрузка погоды...");
//     const weather = await getWeather();
//     console.log(`температура ${weather.temp} , ${weather.condition}`);
// }
// showWeather();


// async function fetchData(shouldFail){
//     return new Promise((resolve , reject) => {
//         setTimeout(()=>{
//             if(shouldFail){
//                 reject("ошибка при загрузке данных");
//             }else{
//                 resolve({data : "важные данные"});
//             }
//         } , 800);
//     });
// }
// async function getData(){
//     try{
//         const result = await fetchData(false) ; 
//         console.log("Успешно" , result.data) ; 
//         const failedResult = await fetchData(true) ; 
//         console.log("это не выполнится");
//     }catch(error){
//         console.log("поймана ошибка" , error);
//     }
// }
// getData();

// async function cookDinner(){
//     console.log("начинаем готовить ...");
//     const pasta = await delay(1000).then(() => "паста готова");
//     console.log(pasta) ; 
//     const sauce = await delay(500).then(() => "соус готов") ;
//     console.log(sauce) ; 
//     const salad = await delay(700).then(() => "салат гтов");
//     console.log(salad);
//     return "ужин готов";
// }
// cookDinner().then((result) => console.log(result));
// async function cookDinnerFast(){
//     console.log("готовим все одноврменно...");
//     const [pasta , sauce, salad] = await Promise.all([
//         delay(1000).then(() => "паста готова"), 
//         delay(500).then(() => "соус готов") , 
//         delay(700).then(() => "салат  готов"), 
//     ]); 
//     console.log(pasta , sauce , salad) ;
//     return "ужин готов быстрее"; 
// }
// cookDinnerFast().then((result) => console.log(result));
// console.log("Fetch API");
// async function getUsers(){
//     try{
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         if(!response.ok){
//             throw new Error(`HTTP ошибка Статус ${response.status}`);
//         }
//         const users = await response.json();
//         console.log("первые 3 пользователя");
//         users.slice(0,3).forEach((user) => {
//             console.log(`-${user.name} (${user.email})`);
//         });
//     } catch (error){
//         console.log("ошибка при загрузке пользователей" , error.message) ; 
//     }
// }
// getUsers();

// async function getUserById(id){
//     try{
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
//         const user = await response.json();
//         console.log(`пользователь ${id}`);
//         console.log(`имя ${user.name}`);
//         console.log(`город ${user.address.city}`);
//         console.log(`компания ${user.company.name}`);
//     }catch(error){
//         console.log("ошибка" , error.message) ; 
//     }
// }
// getUserById(1);
// async function createPost(){
//     try{
//         const newPost={
//             title : "моя первая запись" , 
//             body : "это содержание моей первйо записи в блоге" , 
//             userId: 1 , 
//         };
//         const response = await fetch("https://jsonplaceholder.typicode.com/posts" , {
//             method: "POST" ,
//             headers: {
//                 "Content-Type" : "application/json" , 
//             },
//             body : JSON.stringify(newPost) , 
//         });
//         const createPost = await response.json();
//         console.log("создана новая запись"); 
//         console.log("ID" , createPost.id) ; 
//         console.log("заголовок" , createPost.title) ; 
//     }catch(error){
//         console.log("ошибка при создании записи" , error.message) ; 
//     }
// }
// createPost();

// console.log("Optional Chaining") ;
// const user1 = {
//     name : "Андрей" , 
//     address: {
//         city : "Волжский" , 
//         street : "Пушкина" ,
//     },
// };
// const user2 ={
//     name : "Дмитрий" , 

// };
// const city = user2.address && user2.address.city;
// console.log("Город (старый способ) " , city1);
// const city2 = user2.address?.city;
// console.log("Город (новый способ)" , city2);
// const street = user1.address?.street;
// console.log("улица" , street) ; 

// const admin = {
//     name: "администратор" , 
//     permissions : {
//         canDelete: () => true,
//     },
// };
// const guest ={
//     name : "Гость" , 
// }
// console.log("админ можеи удалять"  , admin.permissions?.canDelete?.());
// console.log("гость может удалять?" , guest.permissions?.canDelete?.());
// const company = {
//     name: "Tech Corp",
//     employees: [
//         {name: "Надежда", role: "Developer"},
//         {name: "Анна", role: "Designer"},
//     ],
// };
// const startup = {
//     name: "New Startup",
// };
// console.log("Первый сотрудник:", company.employees?.[0]?.name);
// console.log("Первый сотрудник стартапа:",startup.employees?.[0]?.name);
// console.log("Nullish Coalescing");
// const value1 = 0;
// const value2 = "";
// const value3 = false;
// const value4 = null;
// const value5 = undefined;
// console.log('value1 || default:', value1 || "default");
// console.log('value2 || default:', value2 || "default");
// console.log('value3 || default:', value3 || "default");
// console.log('value1 ?? "default":', value1 ?? "default");
// console.log('value2 ?? "default":', value2 ?? "default");
// console.log('value3 ?? "default":', value3 ?? "default");
// console.log('value4 ?? "default":', value4 ?? "default");
// console.log('value5 ?? "default":', value5 ?? "default");
// function displayUserSettings(settings) {
//     const theme = settings?.theme ?? "light";
//     const fontSize = settings?.fontSize ?? 14;
//     const notifications = settings?.notifications ?? true;
//     console.log("Настройки пользователя:");
//     console.log("Тема:", theme);
//     console.log("Размер шрифта:", fontSize);
//     console.log("Уведомления:", notifications);
// }
// displayUserSettings({ theme: "dark", fontSize: 16});
// displayUserSettings({notifications: false});
// displayUserSettings({});
const order = {
    orderId: 12345,
    customer: {
        name: "Динара Жанатпаева",
        email: "akirmandianr@gmail.com",
    },
    shipping: {
            city: "Волжский",
            street: "Карбышева",
    },
    payment: {
        method: "Карта",
        status: "Оплачен"
    }
};
function displayOrder(order) {
    console.log(`заказ: ${order.orderId ?? "---"}`);
    const customerName = order.customer?.name ?? "---";
    const customerEmail = order.customer?.email ?? "---";
    console.log("Клиент:");
    console.log(`Имя: ${customerName}`);
    console.log(`Email: ${customerEmail}`);
    const street = order.shipping?.address?.street ?? "---";
    const city = order.shipping?.address?.city ?? "---";
    console.log("Доставка:");
    console.log(`Адрес: ${street}, ${city}, ${zipCode}`);
    const paymentMethod = order.payment?.method ?? "---";
    const paymentStatus = order.payment?.status ?? "---";
    console.log("Оплата:");
    console.log(`Метод: ${paymentMethod}`);
    console.log(`Статус: ${paymentStatus}`);
}
displayOrder(order);
