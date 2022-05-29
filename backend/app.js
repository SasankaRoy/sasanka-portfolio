const arr = [1, 2, 3, 4, 5, 6,7,8,9,10, 11, 12, 13, 14, 15, 16, 17,18,19,20];

let even = 0;
let odd = 0;
let fivePoints = 0;
arr.forEach((item,i) => {
    if(item % 2 === 0) {
         even = even + 1;
                
    }
    if(item % 2 != 0) {
        odd = odd + 3;
    }
    if(item % 5 === 0) {
        fivePoints = fivePoints + 5;
    }
    
});
console.log(fivePoints odd even);
