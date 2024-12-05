// JavaScript to change the text of the paragraph when button is clicked
var cnt = 0;
document.getElementById('OnBnClickedMsgBtn').addEventListener('click', function() {
    const content = document.querySelector('.content p');
    content.innerHTML += '<br>Button clicked!'; // <br> 태그로 줄 바꿈을 추가
    content.innerHTML += ++cnt; // <br> 태그로 줄 바꿈을 추가

    const content3 = document.querySelector('.content3 p');
    content3.innerHTML = cnt;

});

document.getElementById('OnBnClickedResetBtn').addEventListener('click', function() {
    if(confirm("Clear contents?")){
        const content = document.querySelector('.content p');
        content.textContent = 'This is a simple web page to practice Git and GitHub.';
        alert("Number of contents removed : " + cnt);
        cnt = 0;

        const content3 = document.querySelector('.content3 p');
        content3.innerHTML = 0;
    }
});

function AddNumbers(num){
    return num * (num + 1) / 2;
}

function CalcSum(a, b){
    return a + b;
}

function CalcSub(a, b){
    return a - b;
}

function CalcMul(a, b){
    return a * b;
}

function CalcDiv(a, b){
    if(b == 0){
        return 0;
    }
    return Number(a / b);
    return a / b;
}

function CalcPow(a, b){
    var result =1;

    for(var i=0; i<b;i++){
        result = result * a;
    }

    return result;

}