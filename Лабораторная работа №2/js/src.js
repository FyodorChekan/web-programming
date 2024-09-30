window.addEventListener('load', function() {
  var form = document.querySelector('form');
  var container = document.querySelector('.find-container');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var officeId = document.getElementById('office_id').value;
    container.innerHTML = '<img src="img/office' + officeId + '.jpg">';
    container.style.display = 'block';
  });
});


document.querySelector('#clone-button').addEventListener('click', function() {
  const bodyContent = document.body.cloneNode(true);
  document.querySelector('#cloned-content').appendChild(bodyContent);
  bodyContent.querySelector('#clone-button').remove();;

  this.disabled = true;
});
