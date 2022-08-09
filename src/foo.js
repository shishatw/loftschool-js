// function returnBadArguments(fn,...args) {
//   const badArray = [] 
//   for (let i = 0; i < args.length; i++) {
//     try {
//       fn(args[i])
//     } catch (err) {
//       badArray.push(args[i])
//     }
    
//   }
//   return badArray
// }

// function check(el) {
//   if (typeof el !== 'string') {
//     throw new Error('not string');
//   }
// }

// console.log(returnBadArguments({}, 3, 'foo', 'bar', 1, 'test', 2));


const arr = [1, 2, 3];

function foo(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    console.log(`Прохожу цикл... Сейчас ${i + 1} итерация`);
    try {
      if (i === 2) {
        throw new Error('something error');
      }

      res.push(arr[i]);
    } catch (e) {
      console.error(e.message);
      return res;
    }
  }

  return res;
}

const result = foo(arr)

console.log(result);

