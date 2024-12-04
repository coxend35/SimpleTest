// JavaScript to change the text of the paragraph when button is clicked
document.getElementById('changeTextButton').addEventListener('click', function() {
    const content = document.querySelector('.content p');
    content.textContent = 'The text has been changed! Now, try committing this change in Git!';
});
