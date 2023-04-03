export const favoritosStore = {
    favoritos: [], // [{name: "Luke", uid: 1, categoria: "people", link: "/people/1"}, ()]
}

export function favoritosActions(getStore, getActions, setStore) {
    return {
        agregarFavorito: async (objeto) => {
            let store = getStore()
            let arrTemp = store.favoritos.slice() //copio estado centralizado

            if (arrTemp.length > 0) {
                for (let i = 0; i < arrTemp.length; i++) {
                    if (arrTemp[i]["name"] == objeto.name) {
                        return //sale de la función
                    }
                }
            }
            arrTemp.push(objeto)
            setStore({ ...store, favoritos: arrTemp }) //[...favoritos, objeto]
            return true;
        },
    }
}