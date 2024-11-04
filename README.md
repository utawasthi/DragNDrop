# Drag-and-Drop Project

A simple drag-and-drop application that allows users to move items between different containers. This project uses JavaScript to handle the drag-and-drop events and provides visual feedback when items are dragged over drop zones.

## Features

- Drag items from one container to another.
- Visual indicator to show valid drop zones while dragging.
- Items disappear while being dragged and reappear after being dropped.

## Project Structure

- **HTML**: The HTML file contains draggable items with the class `.draggable` and drop zones with the class `.box`.
- **CSS**: Styles to provide visual feedback for dragging and dropping, including the `.over` class, which highlights drop zones.
- **JavaScript**: The main logic for drag-and-drop functionality, including event listeners for drag events on the items and drop zones.

## Code Explanation

### JavaScript

1. **Select draggable items and drop zones:**
   - `draggables` selects all items with the class `.draggable`.
   - `boxes` selects all elements with the class `.box`.

2. **Event Listeners for Draggable Items:**
   - `dragstart`: Sets the `draggedItem` and hides it momentarily while dragging.
   - `dragend`: Makes the item visible again and resets the `draggedItem` variable.

3. **Event Listeners for Drop Zones:**
   - `dragover` and `dragenter`: Prevent default behavior to allow dropping, and adds a visual indicator by applying the `.over` class.
   - `dragleave`: Removes the `.over` class to remove the visual indicator.
   - `drop`: Moves the `draggedItem` into the drop zone and removes the `.over` class.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/utawasthi/DragNDrop.git
   ```

2. Open `index.html` in your browser to start using the drag-and-drop functionality.

3. Drag items between containers to see the effect.

## Example

Here’s a quick example of how the application works:

- The draggable items will initially be placed in a starting container.
- Drag any item over another box to see the visual indicator.
- Drop the item in the desired box to place it there.

## Live Demo

You can view the live demo of the project [here](https://utawasthi.github.io/DragNDrop/).

## Contributing

Feel free to submit issues or make a pull request with improvements!
