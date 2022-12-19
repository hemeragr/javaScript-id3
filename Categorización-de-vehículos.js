/*La categorización de los vehículos se hará de la siguiente forma:
- Coche.  Los coches pueden tener 3 o 5 puertas, su velocidad máxima es mayor de 100 km/h y el número de ruedas es 4  y es motorizado.
- Moto. Las motos tendrán 0 puertas, su velocidad máxima es mayor de 80 km/h y tienen 2 ruedas  y es motorizado.
- Patinete eléctrico. Los patinetes tendrán 0 puertas, su velocidad máxima es 40 km/h, tienen 2 ruedas y es motorizado.
- Bicicleta. Las bicicletas tendrán 0 puertas, su velocidad máxima es 50 km/h, tienen 2 ruedas y no es motorizado.
Vehículo desconocido. Todos los que no entren en ninguna de las categorías anteriores. 
*/



const vehicle1 = {
  doorNumber: 3,
  maxSpeed: 120,
  wheelNumber: 4,
  isMotoriced: true,
};

const vehicle2 = {
  doorNumber: 5,
  maxSpeed: 120,
  wheelNumber: 4,
  isMotoriced: true,
};

const vehicle3 = {
  doorNumber: 0,
  maxSpeed: 80,
  wheelNumber: 2,
  isMotoriced: true,
};

const vehicle4 = {
  doorNumber: 0,
  maxSpeed: 40,
  wheelNumber: 2,
  isMotoriced: true,
};

const vehicle5 = {
  doorNumber: 0,
  maxSpeed: 50,
  wheelNumber: 2,
  isMotoriced: false,
};

function vehicleType(vehicleArgument) {
  // const doorNumber = vehicle.dorNumber;
  // const maxSpeed = vehicle.maxSpeed;
  // const wheelNumber = vehicle.Number;
  // const isMotoriced = vehicle.isMotoriced;
  // el codigo de arriba es lo mismo que el de abajo pero reducido, es ams comodo el de abajo porque asi escribes menos

  const { doorNumber, maxSpeed, wheelNumber, isMotoriced } = vehicle;

  if (
    (doorNumber === 3 || doorNumber === 5) &&
    maxSpeed > 100 &&
    wheelNumber === 4 &&
    isMotoriced
  ) {
    return "coche";
  }

  if (doorNumber === 0 && maxSpeed > 80 && wheelNumber === 2 && isMotoriced) {
    return "moto";
  }

  if (doorNumber === 0 && maxSpeed === 40 && wheelNumber === 2 && isMotoriced) {
    return "patinete eléctrico";
  }

  if (
    doorNumber === 0 &&
    maxSpeed === 50 &&
    wheelNumber === 2 &&
    !isMotoriced
  ) {
    return "Bicicleta";
  }

  if (
    (doorNumber === 3 || doorNumber === 5) &&
    maxSpeed > 100 &&
    wheelNumber === 4 &&
    isMotoriced
  ) {
    return "coche";
  }

  if (doorNumber === 0 && maxSpeed && wheelNumber === 2) {
    if (maxSpeed === 40 && isMotoriced) {
      return "moto";
    }

    if (maxSpeed === 50 && !isMotoriced) {
      return "Bicicleta";
    }

    return "patinete Electrico";
  }

  return "Vehiculo desconocido";
}

function vehicleTypeRefactoriced(vehicleArgument) {
  const vehicles = [
    vehicle1,
    vehicle2,
    vehicle3,
    vehicle4,
    vehicle5,

    /* 
    
    
    
    oorNumber: 3,
    maxSpeed: 120,
    wheelNumber: 4,
    isMotoriced: true,
    }

    {
    doorNumber: 5,
    maxSpeed: 120,
    wheelNumber: 4,
    isMotoriced: true,
    }

    {
    doorNumber: 0,
    maxSpeed: 80,
    wheelNumber: 2,
    isMotoriced: true,
    }

    {
    doorNumber: 0,
    maxSpeed: 40,
    wheelNumber: 2,
    isMotoriced: true,
    }

    {
    doorNumber: 0,
    maxSpeed: 50,
    wheelNumber: 2,
    isMotoriced: false,
    }
    */
  ];

  vehicles.forEach(function (vehicle) {
    console.log(vehicleType(vehicle)); // llama a la funcion
  }); // recorrer una funcion de la forma mas facil hasta que se termine, va a llamar a la funcion hasta que se termine el array

  /*
    for (let index = 0; index<vehicles.length; index++ ){
        const vehicle = vehicles[index];
        const type = vehicleType(vehicle);
       console.log(vehicleType(vehicle));
       
    }


    */
}