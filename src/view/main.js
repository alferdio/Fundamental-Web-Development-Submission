import '../component/drink-list.js';
import '../component/search-bar.js';
import Data from '../data/data.js';

const main = () => {
    const searchElement = document.querySelector("search-bar");
    const drinkListElement = document.querySelector("drink-list");

    const onButtonSearchClicked = () => {
        Data.searchClub(searchElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        drinkListElement.drinks = results;
    };

    const fallbackResult = message => {
        drinkListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};

export default main;