/*
Crea una función cargarProductos() que simula cargar una lista de productos desde un servidor 
(usando setTimeout y una promesa). Luego imprime los nombres de los productos.*/

async function cargarProductos() {
    console.log("Iniciando proceso......")
    try {
        const productoArroz = {
            nombre: "Arroz Refinado",
            precio: 12.23,
            marca: "Caserita"
        }

        const productoLeche = {
            nombre: "Leche Evaporada",
            precio: 4.20,
            marca: "Gloria"
        }
        const productoLaptop = {
            nombre: "Laptop Asus Tuf Gamig F15",
            precio: 3400.90,
            marca: "Asus"
        }

        const listaProductos = new Array(productoArroz, productoLaptop, productoLeche)

        const listaResponse = await new Promise((resolve, reject) => {
            setTimeout(() => {
                const errorProceso = Math.random() < 0.05;
                (errorProceso) ? reject("Error al obtener lista de productos....") : resolve(listaProductos)
            }, 3000);
        })
        mostrarData(listaResponse)
    } catch (error) {
        console.error(error)
    }
}

function mostrarData(listaProductos) {
    if (!listaProductos || !Array.isArray(listaProductos)) {
        console.error("No se recibió una lista válida de productos.");
        return;
    }

    console.log("Lista de productos de la base de datos:");
    listaProductos.forEach(producto => {
        console.log("- " + producto.nombre);
    });
}

cargarProductos()