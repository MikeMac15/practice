function mult(num) {

    let answer = 1;

    for (let i = 1; i <= num; i++){
        answer *= i;
    }
        return answer;

}
console.log(mult(8));