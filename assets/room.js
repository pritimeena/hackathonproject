const todoCheckboxes = document.querySelectorAll('.todo-checkbox');
const deleteButtons = document.querySelectorAll('.delete-button');
const notesTextarea = document.querySelector('#notes');
const saveNotesButton = document.querySelector('#save-notes');

// Add event listener to each delete button
deleteButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
    });
});

// Save notes to local storage when save button is clicked
saveNotesButton.addEventListener('click', () => {
    localStorage.setItem('notes', notesTextarea.value);
});

// Check local storage for saved notes
if (localStorage.getItem('notes')) {
    notesTextarea.value = localStorage.getItem('notes');
}

// Add strikethrough to todo item when checkbox is checked
todoCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            checkbox.nextElementSibling.style.textDecoration = 'line-through';
        } else {
            checkbox.nextElementSibling.style.textDecoration = 'none';
        }
    });
});
