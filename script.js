// JavaScript to change the text of the paragraph when button is clicked
document.getElementById('OnBnClickedMsgBtn').addEventListener('click', function() {
    const content = document.querySelector('.content p');
    content.innerHTML += '<br>Button clicked!'; // <br> 태그로 줄 바꿈을 추가
});

document.getElementById('OnBnClickedResetBtn').addEventListener('click', function() {
    const content = document.querySelector('.content p');
    content.textContent = 'This is a simple web page to practice Git and GitHub.';
    alert("Reset content!");
});
