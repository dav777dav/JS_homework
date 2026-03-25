Function.prototype.myApply = function(thisArgs, args){
	const newArgsThis = thisArgs ?? globalThis;

	const sym = Symbol();

	newArgsThis[sym] = this;

	const res = newArgsThis[sym](...args);

	delete newArgsThis[sym];

	return res;
}

function showInfo(city, country) {
 return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

console.log(showInfo.myApply(user, ["New-York", "USA"]));