// function transform(str) {
//   const charArray = str.split('');
//   let result = '';

//   charArray.map((element) => {
//     if(element !== '-') {
//       result = result + element;
//     }
//   });
//   return result;

// }

const transform = str => str.split('').reduce((res, cur) => cur !== '-' ? res += cur : res, '')

// console.log(transform('test-test-test'));

// console.log(Object.entries({ foo: 'bar', test: true }))


const obj = {
  foo: 'bar',
  test: 2,
}

const obj2 = {
  test: 2,
  foo: 'bar'
}

console.log(JSON.stringify(obj))

console.log(JSON.stringify(obj) === JSON.stringify(obj2))

