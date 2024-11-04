// Selecting the draggable items and the drop zones
const draggables = document.querySelectorAll('.draggable');
const boxes = document.querySelectorAll('.box');

let draggedItem = null;

// Event listeners for draggable items
draggables.forEach(item => {
  item.addEventListener('dragstart', () => {
    draggedItem = this;
    setTimeout(() => this.style.display = 'none', 0); // Make it invisible while dragging
  });

  item.addEventListener('dragend', () => {
    setTimeout(() => {
      draggedItem.style.display = 'block'; // Make it visible again after dropping
      draggedItem = null; // Reset the dragged item
    }, 0);
  });
});

// Event listeners for drop zones (boxes)
boxes.forEach(box => {
  box.addEventListener('dragover', (e) => {
    e.preventDefault(); // Prevent default to allow dropping
    this.classList.add('over'); // Add a visual indicator when dragging over
  });

  box.addEventListener('dragenter', (e) => {
    e.preventDefault(); // Same as dragover to allow dragging
    this.classList.add('over');
  });

  box.addEventListener('dragleave', () => {
    this.classList.remove('over'); // Remove the visual indicator
  });

  box.addEventListener('drop', () => {
    this.classList.remove('over'); // Remove the visual indicator
    if (draggedItem) {
      this.appendChild(draggedItem); // Append the dragged item to the new container
    }
  });
});
