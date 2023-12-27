function loadCPU(){
    let answer = 0;
    for(let i = 0; i < 100000; i++){
        answer += i;
    }
    return answer;
}
console.log(loadCPU());