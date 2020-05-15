class Data{
    static searchClub(keyword) {
        return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(Response => {
            return Response.json();
        })
        .then(responseJson =>{
            if(responseJson.drinks) {
                return Promise.resolve(responseJson.drinks);
            } else {
                return Promise.reject(`${keyword} is not found`);
            }
        })
    }
}

export default Data;