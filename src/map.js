// const users = ['alesha', 'vasya', 'petya'];

// function test () {
//   return 1;
// }

// const num = test()

// const newUsers = users.map((user) => {
//   if (user === 'alesha') {
//     return 'loh ebaniy';
//   }

//   return user;
// })

// console.log(newUsers)

// создается перменная 'a' со значением 1
const a = 42;
// создается функция через Function Declaration, с названием test, которая принимает в себя аргумент number
function test(number) {  
// возвращаем переменную number, увеличеную на 1
  return number + 1
}
// сохраняем резульат вызова функции в переменную b, в которой будет лежать 43 
const b = test(a);


// создаем переменную fn, в которую присваивается стрелочная функция. 
const fn = (number) => {
  const result = number + 1;
  return result;
}