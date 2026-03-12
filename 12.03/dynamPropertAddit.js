let obj = {};

let arr = ["Jack", "Hello", "Cup", "Git"];

for (let i = 0; i < arr.length; i += 1) {
  obj[arr[i]] = i;
}

console.log(obj);