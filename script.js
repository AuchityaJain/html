  function saveNote() {
  const note = document.getElementById('noteText').value;

  fetch('http://localhost:8080/save-note', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: note })
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('message').innerText = data;
    document.getElementById('noteText').value = '';
  })
  .catch(error => {
    document.getElementById('message').innerText = 'Error saving note';
    console.error(error);
  });
}
