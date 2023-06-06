

const handler = {
    set: function (obj, prop, value) {
        if (prop === 'edad' && value < 18) {
            alert('Debes tener al menos 18 años para realizar una reserva.');
        } else {
            obj[prop] = value;
           
        }
        return true;
    }
};


const reserva = new Proxy({}, handler);


const form = document.getElementById('reservacion');


form.addEventListener('submit', function (event) {
    event.preventDefault(); 

    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const edad = parseInt(document.getElementById('edad').value);
    const fecha = document.getElementById('fecha').value;

   
    reserva.nombre = nombre;
    reserva.apellido = apellido;
    reserva.email = email;
    reserva.edad = edad;
    reserva.fecha = fecha;

    
    console.log(reserva);
});