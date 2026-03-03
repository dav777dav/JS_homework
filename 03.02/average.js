function average(arr) 
{
    let sum = 0;

    for (let i = 0; i < arr.length; i += 1) {
        sum += arr[i];
    }

    let av = sum / arr.length;

    return av;
}

console.log(average([90, 80, 100]));
