// Ejercicio 1 
//crear una funcion que dado un array, te devuelva la posicion del elemento con valor 29
// si el elemento no existe, te devolvera -1

const numbers = [1, 2, 5, 10, 29, 50];

function find29WithWile(numbers) {
    //hay que recorrer la lista hata que encuentre el numero 29
    // hay que recorrer el array entero mientras no encuentre 29.

    let position = 0;
    let hasFound29 = false;

    while(numbers.lengt > position && !hasFound29) {

        if(numbers[positions] === 29){
            hasFound29 === true;
        } else{
            position = position + 1;
        }
       

        return hasFound29 ? position : -1; 

        /*
        if(!hasFound29){
            return -1;
        }

        return position;

        */
    }
}
find29WithWile([2,4,5,6,]); 


function find29WithFor(numbers ){

    for (let indice = 0; numbers.lengt > position; indice = indice +1 /* es igual que index++ */ ){

        if(numbers[positions] === 29){
            return indice;
        } 

        return -1;
       
    }


}

function find29WithFor2(numbers ){

let indice;
let hasFound29 = false;


    for (indice = 0; numbers.lengt > position; indice = indice +1 /* es igual que index++ */ ){

        if(numbers[positions] === 29){
            hasFound29 = true;
            break;
        } 

        return hasFound29 ? position : -1;

        // return numbers[positions] === 29 ? position : -1; es iguallo que hay que uitar del codigo el has found

       
    }


    function find29WithIndexOf(numbers) {
    
        return numbers.indexOf(29);

    }


}


const user = { // un objeto es la forma de darle forma a nuestros datos para poder trabajar con ellos
    profile {

        avatarUrl: "https:...",
        nombre: "hemera",

    },

    timezone: "europe/madrid",
    edad: 33,
    email: "...@hotmail.com"

}

const vehicle = {
    marca:'',
    color:'',
    matricula:'',
    motor:'',
    modelo:'',
    year: '',

    caracteristicas: {

        numeroRuedas: 2,
        puertas: 5,
        
    }

}

function vehicleTipe (vehicle){
    //si el numero de ruedas es dos es una moto si no un coche

    if(vehicle.caracteristicas.numeroRuedas === 2){
        return 'moto';

    } else {
        return 'coche';
    }

}