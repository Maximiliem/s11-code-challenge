// almaceno la url de la api en una constante
const url = 'https://jsonplaceholder.typicode.com/users';

// se utiliza el querySelector con 'form' porque es la única que hay para este ejercicio. En caso de que tuviera más forms, debería añadirles clases o id a los forms y luego recuperarlos en una constante por su clase o id.
// lo que hago es referenciar al formulario del HTML
const form = document.querySelector('form');

// escucho el evento submit del formulario
form.addEventListener('submit', (evento) => { // se crea una función flecha para
    evento.preventDefault(); // evitar que el formulario se envíe de manera convencional
    
    // se crea un nuevo objeto formData y se agregan los datos del formulario
    const formData = new FormData(form);
    console.log(formData);

    // realizo la petición fetch con el método POST
    fetch(url, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json()) // obtener los datos de la respuesta de la solicitud HTTP. Con el método then() llamamos al método json() del objeto response. json() convierte el contenido de la respuesta en formato JSON.
    .then(data => {  // se llama a la función cuando la promesa es resuelta
        console.log('Se hizo la petición de manera correta', data); // se imprimen los datos de la respuesta por consola
    })
    .catch(error => {
        console.error('Error: ', error) // en caso de que la respuesta no sea exitosa, entonces se llama a la función console.error e imprimimos el error en consola.
    });

    // se agrega el form.reset() dentro del evento del submit para reiniciar el formulario una vez que se envíe
    form.reset();
});