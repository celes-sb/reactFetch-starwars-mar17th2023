export const favoritosStore = {
    favoritos: [],
}

export function favoritosActions(getStore, getActions, setStore) {
    return {
        agregarFavorito: async () => {
            console.log("Soy una función del archivo ejemploStore que se ejecuta desde el flux.js")
            return true;
        },
    }
}