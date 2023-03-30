let form = document.getElementById('form-inmar');
form.addEventListener('submit', e => {
    e.preventDefault();

    let timeStamp = new Date();
    document.getElementById('time').innerHTML= timeStamp;
    document.getElementById('time').value = timeStamp;

    fetch(form.action, {
        method: 'POST',
        body: new FormData(document.getElementById('form-inmar')),
    }).then (
        response => response.json()
    );
});