// fruits[3] = "kiwi"
// .push()
//გამოიყენება მასივში ერთი ან მეტი ელემენტის დასამატებლად.
//იგი ცვლის მასივს და ამატებს ახალ ელემენტებს.

// fruits.push("kiwi", "mango");

//.pop()
// ეს მეთოდი გამოიყენება მასივში ბოლო ელემენტების წასაშლელად

// fruits.pop();
// let fruits = ["apple", "pear", "orange", "banana", "peach", "watermelon", "grape", "zaro", "paro", "karo", "taro", "ananasi"];

// console.log(fruits.length);

// for(let i = 0; i < fruits.length - 5; i++){
//     fruits.pop();
// }

// console.log(fruits);

// fruits.shift();


// for(let i = 0; i < fruits.length; i++) {
//     document.write(`<p>${fruits[i]}</p>`)
// }

// let numbers = [
//     4, 1, 4, 6, 6, 7, 1, 8, 9, 4, 6, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 8, 5412, 32,
// ]

// let num = [0,1,2,3,4,5,6,7,8,9];


// console.log(numbers.sort(function(a, b){
//     return a - b;
// }))

// .shifty()
// ეს მეთოდი შ₾ის პირველ ელემენტს მასივიდან და გადააქვს ყველა დარჩენილი ელემენტის ქვედა ინდექსზე

// .unshift()
// ეს მეთოდი ამატებს ერთ ან მეტ ელემენტს მასივის დასაწყისში და არსებულ ელემენტებს ემატებათ ინდექსი

// objects
let car = {
    brand: "BMW",
    model: "x6",
    date: 2009,
    price: 40000,
    color: "Black",
    engine: 4.2,
    fullInfo: function () {
    return (
        "ამ მანქანის ბრენდი არის" + this.brand +
        "მოდელი არის" +
        this.model +
        "ფასი არის" +
        this.price
    )
},
};

console.log(car.date, car.price, car.color);

document.getElementById(`brand`).innerHTML = car.brand
document.getElementById(`model`).innerHTML = car.model
document.getElementById(`date`).innerHTML = car.date
document.getElementById(`fullInfo`).innerHTML = car.fullInfo();