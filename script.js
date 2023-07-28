// Get the theme toggle button and the theme style link element
const themeToggle = document.getElementById('theme-toggle');
const themeStyle = document.getElementById('theme-style');

// Check for saved user preference (light/dark mode)
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.body.classList.add(currentTheme);
}

// Toggle between light and dark mode when the button is clicked
themeToggle.addEventListener('click', () => {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    localStorage.setItem('theme', 'light-mode');
    // Style the h1 element when in light mode
    const h1Elements = document.getElementsByTagName("h1");
    for (const h1 of h1Elements) {
      h1.style.color = 'black';
    }
    
    
    
  } else {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark-mode');
    
    // Style the h1 element when in light mode
    const h1Elements = document.getElementsByTagName("h1");
    for (const h1 of h1Elements) {
    h1.style.color = 'white';
}
     
  }
});



// Get the starting date when you began coding
const startDate = new Date('2022-10-06'); // Replace with your actual start date

// Function to update the counter display
function updateCounter() {
  const currentDate = new Date();
  const timeDiff = currentDate - startDate;

  // Calculate the number of days, hours, minutes, and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Update the counter display
  const counterElement = document.getElementById('coding-counter');
  counterElement.textContent = `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

  // Update the counter every second
  setTimeout(updateCounter, 1000);
}

// Start updating the counter
updateCounter();



