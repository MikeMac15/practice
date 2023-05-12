function mult(num) {
// answer declaration
    let answer = 1;
// for loop to cycle from 1 - "num"
    for (let i = 1; i <= num; i++){
// multiply answer in order from 1 - "num"     
        answer *= i;
    }
        return answer;

}
console.log(mult(8));