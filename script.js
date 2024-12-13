// Select the button and the message element
const button = document.getElementById('magicButton');
const message = document.getElementById('message');

// Add an event listener to the button
button.addEventListener('click', () => {
  message.textContent = 'You clicked the button! 🎉';
  button.style.display = 'none'; // Hide the button after clicking
});
