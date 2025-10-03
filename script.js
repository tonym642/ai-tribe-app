function loadModule(module) {
  fetch('modules/' + module)
    .then(response => response.text())
    .then(html => {
      document.getElementById('main-content').innerHTML = html;
    })
    .catch(err => console.error('Error loading module:', err));
}
