// Get the containers and the reset button
const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2');
const resetBtn = document.getElementById('resetBtn');
const successMessage = document.getElementById('successMessage');

// Add event listeners for drag and drop events
container1.addEventListener('dragstart', handleDragStart);
container2.addEventListener('dragover', handleDragOver);
container2.addEventListener('drop', handleDrop);
resetBtn.addEventListener('click', handleReset);

// Store the dragged item
let draggedItem = null;

// Function to handle drag start event
function handleDragStart(e) {
  draggedItem = e.target;
  // Add a class to provide visual feedback during dragging
  draggedItem.classList.add('dragging');
}

// Function to handle drag over event
function handleDragOver(e) {
  e.preventDefault(); // Allow drop
}

// Function to handle drop event
function handleDrop(e) {
  e.preventDefault();
  // Remove the visual feedback class from the dragged item
  draggedItem.classList.remove('dragging');
  // Append the dragged item to the second container
  container2.appendChild(draggedItem);
  // Reset the dragged item reference
  draggedItem = null;
  // Display a success message or update the UI
  displaySuccessMessage();
}

// Function to handle reset button click event
function handleReset() {
  // Move all items from the second container back to the first container
  while (container2.firstChild) {
    container1.appendChild(container2.firstChild);
  }
  // Hide the success message
  successMessage.style.display = 'none';
}

// Function to display a success message or update the UI
function displaySuccessMessage() {
  successMessage.style.display = 'block';
}
