/*Simula una función llamada obtenerUsuario() que devuelve los datos de 
un usuario después de 2 segundos. Usa await para obtener los datos y 
mostrarlos en consola.*/

async function obtenerUsuario() {
    try {
        const user = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const usuario = {
                    Nombre: 'Daniel',
                    Edad: 12
                };
                //simulacion de error 
                const error = Math.random() < 0.05
                if (error) {
                    reject("Error al obtener informacion del usuario....")
                } else {
                    resolve(usuario)
                }
            }, 2000);
        });
        console.log(user)
    } catch (ex) {
        console.error(ex);
    }
}

obtenerUsuario()

