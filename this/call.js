Function.prototype.myCall = function(thisArg, args) {
  const newThis = thisArg ?? globalThis;

  const sym = Symbol();

  newThis[sym] = this;

  const res = newThis[sym](...args);

  delete newThis[sym];

  return res;
}

function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

console.log(showInfo.myCall(user, "New-York", "USA"));
