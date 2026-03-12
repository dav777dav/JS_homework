function equalStr(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

let obj1 = {
    name: "Davit", 
    age: 19 
};

let obj2 = {
    name: "Davit", 
    age: 19 
};

console.log(equalStr(obj1, obj2));