export class UsuarioClases{
    #password;
    constructor(nombre,email,password){
        this.nombre=nombre;
        this.email=email;
        this.#password = password;
    }

    //----Metodos publicos----
    login(emailIntroducido,passwordIntroducida){
        //Comprobar el mail y password
        if(this.email === emailIntroducido && _password===passwordIntroducida){
            return `Bienvenido ${this.nombre}`;
        }else{
            return `Error en las credenciales`;
        };
    };

    updateEmail(newEmail){
        this.email = newEmail;
        return `Email actualizado ${this.email}`;
    }
    
    getInfo(){
        return `Usuario:${this.nombre} - email:${this.email}`;
    }
}