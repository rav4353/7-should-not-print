let num = 7;
let emptyArray = [];
for (i = 1; i <=100; i++){
    if(i % num == 0)
        continue;
    if(i % 10 == num)
        continue;
    if(Math.floor(i/10) == num)
        continue;
        emptyArray.push(i);
    }
console.log(emptyArray);
