/**
 * @author: Luis Maldonado Hernandez
 */

/**
 * @description: Crear un formulario que permita validar el correo electronico. Si el email no es valido
 * mostrara un mensaje de eerror dinamico bajo el cuadro de texto
 */
const divForm = ()=>{
     // Crear un contenedor para el formulario
     const divForm = document.createElement('div');
     divForm.classList.add('form-container');
     // Crear el formulario
     const formEmail = document.createElement('form');
     formEmail.classList.add('form');
     // Crear etiqueta y campo de texto
     const labelEmail = document.createElement('label');
     labelEmail.textContent = 'Email:';
     formEmail.appendChild(labelEmail);
     const inputEmail = document.createElement('input');
     inputEmail.setAttribute('type', 'email');
     inputEmail.setAttribute('name', 'email');
     inputEmail.id = 'email';
     inputEmail.setAttribute('placeholder', 'Escribe tu email');
     formEmail.appendChild(inputEmail);
     // Agregar el formulario al contenedor principal
     divForm.appendChild(formEmail);
     //Creo label de verificacion de email
     const pEmailCheck = document.createElement("p");
     pEmailCheck.id = "email-check";
     pEmailCheck.textContent = "Email no valido";
     pEmailCheck.style.color = "red";
     pEmailCheck.style.display= "none";
 
     divForm.appendChild(pEmailCheck);
    
     //Logica de valoracion de email
     //Necesito una expresion regular de validacion de email
     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     inputEmail.addEventListener('input',(event)=>{
        if(emailRegex.test(inputEmail.value)){
            pEmailCheck.style.display="none";
         }else{
            pEmailCheck.style.display="block";
        }

        
     }); 


     return divForm;
};   


export default divForm;