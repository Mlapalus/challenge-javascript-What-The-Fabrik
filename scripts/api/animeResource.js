class AnimeResource extends LibraryResource {

    /**
     * @param id
     * @todo Utiliser l'api de la classe parente pour appeler la méthode fetch
     * @returns {Promise} Promesse qui retourne les données JSON en cas de succès
     */
    static getDetail(id) {
        return fetch(`https://api.jikan.moe/v3/anime/${id}`)
                    .then(response => response.json())
                    .then(json => json)
    }
}
