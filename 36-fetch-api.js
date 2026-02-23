/**
 * Fetch API: Es una función JS que permite hacer peticiones de tipo HTTP, incluyendo GET, POST, PUT, DELETE, etc. Es una API moderna.
 * 
 * si solo tiene un parametro no es necesario los dos parentesis Ejemplo .then((result) si se le quita los dos parentesis igual va a funcionar, asi .then(result).
 */

function getEmployees(){
    // fetch('Aqui se copia la URL, https://ricoprogramar.com/');
    // Aunque para este caso estamos haciendo una petición a un archivo local 
    // fetch("/data/employees,json");
    const file = "/data/employees.json"
    fetch(file)
    .then((result)=> {
        console.log(result);
        return result.json();
    })

    .then(data =>{

        const {employees}= data;

        employees.forEach (employe => {
            console.log(employe.id);
            console.log(employe.user);
            console.log(employe.job);
            document.querySelector('.content').textContent += employe.user;
        })


        console.log(employees);
    });

}

getEmployees();