Function.prototype.myBind = function (thisArg, ...args) {
    const newThis = thisArg ?? globalThis;

    const fn = this;

    return function (...newArgs) {
        const sym = Symbol();

        newThis[sym] = fn;

        const res = newThis[sym](...args, ...newArgs);

        delete newThis[sym];

        return res;
    };
}

function showInfo(city, country) {
    return `${this.name} lives in ${city}, ${country}`;
}

const user = { name: "Joe Doe" };

const boundShowInfo = showInfo.myBind(user, "New York");

console.log(boundShowInfo("USA"));