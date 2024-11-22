/**
 * Data de Ejemplo: 
 *  [
 * {nombre:"Juan",edad:25,email:"juan@gmail.com"},
 * {nombre:"Ana",edad:22,email:"ana@gmail.com"}
 * ]
 */

const dynamicTable=(data,headers)=>{
    //Creamos div
    const divTable = document.createElement("div");
    
    //Creamos la tabla
    const table = document.createElement("table");
    table.id= "table-data-users";
    table.style.border = 1;

    //Creamos el tHead
    const thead = document.createElement("thead");
    const headerRow = document.createElement("tr");
    //recorremos los headers
    headers.forEach(header => {
        //Creamos tantos th como headers.
        const th = document.createElement("th");
        th.textContent = header;
        //SI QUIERO ALGUNA LOGICA DE CODIGO DE LAS FILAS ROLLO ORDENAR SE HACE AQUI
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);

    //Creamos el tbody
    const tbody = document.createElement("tbody");
    //limpiamos una tabla
    tbody.innerHTML="";

    data.forEach(user => {
        //tr para cada usr
        const trUser = document.createElement("tr");
        trUser.innerHTML=`
        <td>${user.nombre}</td>
        <td>${user.edad}</td>
        <td>${user.email}</td>
        `
        tbody.appendChild(trUser);
    });

    //añadimos el thead y tbody a la tabla
    table.append(thead,tbody);

    divTable.appendChild(table);

    return divTable;

}

export default dynamicTable;