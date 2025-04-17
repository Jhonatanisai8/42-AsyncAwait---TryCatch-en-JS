const fetchPosts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['posts01', 'posts02']
            const error = Math.random() > 0.5
            if (error) {
                reject('Hubo un error al intentar obtener los posts')
            } else {
                resolve(posts)
            }
        }, 2000);
    })
}

const mostrarPosts = async () => {
    try {
        const posts = await fetchPosts()
        console.log(posts)
    } catch (error) {
        console.log(error);
    }
}
mostrarPosts()

// console.log('Inicia operacion')
// fetch().then((posts) => {
//     console.log(posts)
// }).catch((error) => {
//     console.log(error)
// })
// console.log('Finaliza proceso')