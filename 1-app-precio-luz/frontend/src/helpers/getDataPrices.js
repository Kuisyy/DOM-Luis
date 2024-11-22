const url = import.meta.env.VITE_DATA_URL;

export const getData = async ()=>{
    try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Error al cargar la API");
        }
        const data = response.json;
        return data;
    } catch (error) {
        console.log("Error: ",error);
    }

}

