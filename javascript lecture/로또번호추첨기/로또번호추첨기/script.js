var lotto = [];
let x=0;
while (lotto.length < 6) {
    // parseInt -> 실수를 정수로 변환
    var num = parseInt(Math.random() * 45 + 1);
    // indexOf->있으면 해당 인덱스, 없으면 -1
    if (lotto.indexOf(num) == -1) {
        lotto.push(num);
    }
}
// array.sort -> 사전순 정렬이 됨
lotto.sort((a,b)=>a-b);
for (x=0; x<6; x++){
document.write(`<div class='ball ball${x+1}'>${lotto[x]}</div>`);
}
