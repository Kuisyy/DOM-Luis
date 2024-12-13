

//---------------------------------Funciones Fabrica--------------------------------------------------------
export function Vehiculo(marca,modelo,kilometraje){
    return{
        marca,
        modelo,
        kilometraje,

        registrarViaje(kms){
            if(kms>0){
                this.kilometraje+=kms;
                console.log(`El vehículo ${this.marca} ${this.modelo} ha recorrido ${kms} kms.`);
            }else{
                console.log("No se puede registrar un kilometraje negativo.");
            };
        }
    }
    
}

export function Camion(marca,modelo,kilometraje,capacidadCarga){
    const Camion = new Vehiculo(marca,modelo,kilometraje);
    Camion.capacidadCarga = capacidadCarga;

    Camion.registrarViaje == function(kms,pesoTransportado){
        if(kms>0){
            this.kilometraje+=kms;
            console.log(`${this.marca} ${this.modelo} transportó ${pesoTransportado} toneladas durante ${kms} km. Ahora tiene ${this.kilometraje} km.`);

        }else{
            console.log("El kilometraje debe ser positivo");
        }
        
        return Camion;
    }
}

export function Automovil(marca,modelo,kilometraje,capacidadPasajeros){
    const Automovil = new Vehiculo(marca,modelo,kilometraje);
    Automovil.capacidadPasajeros = capacidadPasajeros;

    return Automovil;
}



//---------------------------------Funcion Constructora--------------------------------------------------------

export function VehiculoConstructor(marca,modelo,kilometraje){
    this.marca = marca;
    this.modelo = modelo;
    this.kilometraje = kilometraje;

    this.registrarViaje = function(kms){
        if(kms>0){
            this.kilometraje+=kms;
            console.log(`El vehículo ${this.marca} ${this.modelo} ha recorrido ${kms} kms.`);
        }else{
            console.log("No se puede registrar un kilometraje negativo.");
        };
    };
};

export function CamionConstructor(marca,modelo,kilometraje,capacidadCarga){
    VehiculoConstructor.call(this,marca,modelo,kilometraje);
    this.capacidadCarga = capacidadCarga;

    CamionConstructor.prototype.constructor = Object.create(VehiculoConstructor.prototype);
    CamionConstructor.prototype.registrarViaje = function(kms,pesoTransportado){
        if(kms>0){
            this.kilometraje+=kms;
            console.log(`${this.marca} ${this.modelo} transportó ${pesoTransportado} toneladas durante ${kms} km. Ahora tiene ${this.kilometraje} km.`);
        }else{
        console.log("El kilometraje debe ser positivo");
        }
    }   
};

export function AutomovilConstructor(marca,modelo,kilometraje,capacidadPasajeros){
    VehiculoConstructor.call(this,marca,modelo,kilometraje,capacidadPasajeros);
    this.capacidadPasajeros = capacidadPasajeros;
}


//---------------------------------Clases--------------------------------------------------------

export class VehiculoClass{
    constructor(marca,modelo,kilometraje){
        this.marca = marca;
        this.modelo = modelo;
        this.kilometraje = kilometraje;
    }

    registrarViaje(kms){
        if(kms>0){
            this.kms+=kms;
            console.log(`El vehículo ${this.marca} ${this.modelo} ha recorrido ${kms} kms.`);
        }else{
            console.log("No se puede registrar un kilometraje negativo.");
        };
    };
};

export class CamionClass extends VehiculoClass{
    constructor(marca,modelo,kilometraje,capacidadCarga){
        super(marca,modelo,kilometraje);
        this.capacidadCarga = capacidadCarga;
    };

    registrarViaje(kms,pesoTransportado){
        if(kms>0){
            this.kms+=kms;
            console.log(`${this.marca} ${this.modelo} transportó ${pesoTransportado} toneladas durante ${kms} km. Ahora tiene ${this.kms} km.`);
        }else{
            console.log("El kilometraje debe ser positivo");
        };
    };
};

export class AutomovilClass extends VehiculoClass{
    
    constructor(marca,modelo,kilometraje,capacidadPasajeros){
        super(marca,modelo,kilometraje);
        this.capacidadPasajeros = capacidadPasajeros;
    };
}