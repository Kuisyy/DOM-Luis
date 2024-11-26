
export function UsuarioFabrica(nombre,email,password){
    let _password = password;
    return{
        nombre,
        email,
        login(emailIntroducido, passwordIntroducida){
            if(this.email === emailIntroducido && _password===passwordIntroducida){
                return `Bienvenido ${this.nombre}`;
            }else{
                return `Error en las credenciales`;
            };
        },
        updateEmail(newEmail){
            this.email = newEmail;
            return `Email actualizado ${this.email}`;
        },
        getInfo(){
            return `Usuario:${this.nombre} - email:${this.email}`;
        },
    };
};