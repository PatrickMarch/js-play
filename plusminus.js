                 let array = [6,-4,3,-9,0,4,1];
                function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    for (let i = 1; arr >= arr[0] + 1; i++) {
        if (arr[i] === 0) { zeros += 1 / arr[0] }
        else if (arr[i] < 0) { positive += 1 / arr[0] }
        else if (arr[i] > 0) { negative += 1 / arr[0] }
    }
    return positive, negative, zeros;
}
                console.log(plusMinus(array));
                let number =1;
                if (number >0)
                  {console.log(Math.round(1/ array[0]));}
                console.log(number,"potato");