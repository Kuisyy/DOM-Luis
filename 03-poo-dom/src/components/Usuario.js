
export function Usuario(nombre,email,password){
    this.nombre=nombre;
    this.email=email;
    let _password = password; //Variable privada
    //----metodo publico----
    this.login = function(emailIntroducido,passwordIntroducida){
        //Comprobar el mail y password
        if(this.email === emailIntroducido && _password===passwordIntroducida){
            return `Bienvenido ${this.nombre}`;
        }else{
            return `Error en las credenciales`;
        };
    };
    this.updateEmail = function (newEmail){
        this.email = newEmail;
        return `Email actualizado ${this.email}`;
    }
    
    this.getInfo = function (){
        return `Usuario:${this.nombre} - email:${this.email}`;
    }
};

