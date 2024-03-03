document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    var title = document.getElementById('title').value;
    var author = document.getElementById('author').value;
    var isbn = document.getElementById('isbn').value;

    // Create a new row
    var row = document.createElement('tr');
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="btn btn-danger delete">Clear</button></td>
    `;
    document.getElementById('book-list').appendChild(row);

    // Clear form fields
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
});

// Delete book
document.getElementById('book-list').addEventListener('click', function(e) {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.parentElement.remove();
    }
});
