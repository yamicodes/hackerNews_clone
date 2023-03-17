import view from '../utils/view.js'
import Story from '../components/Story.js'
import store from '../store.js'
import checkFavourite from '../utils/checkFavourite.js';


export default async function Stories(path,showFavourites) {
    const {favourites} = store.getState();
    const stories = await getStories(path) ;
    const hasStories = stories.length > 0;

    view.innerHTML = `<div>
    ${ hasStories 
    ? stories.map((story, index) => Story({...story,index: index + 1, isFavourite : checkFavourite(favourites,story) })).join('')
    : 'No Stories'}
    </div>`;

    document.querySelectorAll('.favourite').forEach(favouriteButton => {
      favouriteButton.addEventListener('click', async function() {
        const story = JSON.parse(this.dataset.story);  
        const isFavourited = checkFavourite(favourites, story);
        store.dispatch({ type: isFavourited ? "REMOVE_FAVOURITE" : "ADD_FAVOURITE", payload: { favourite: story } })  
        await Stories(path);
      }); 
   });
      
}



const getStories = async (path) => {
    const isHomeRoute = path === '/';
    const isNewRoute = path ==='/new';
    if (isHomeRoute) {
        path = '/news';  
      } else if (isNewRoute) {
        path = '/newest';  
      } 
    const response = await fetch(`https://node-hnapi.herokuapp.com${path}`);
    const stories = await response.json();
    return stories;
}