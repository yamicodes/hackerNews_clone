import view from '../utils/view.js'
import Story from '../components/Story.js'
import store from '../store.js'

export default function favourites(path) {
    const {favourites} = store.getState();
    const hasFavourites = favourites.length > 0;

    view.innerHTML = `<div>
    ${hasFavourites ? favourites.map((favourite, index) => Story({...favourite, index: index + 1})): "No Favourites"}
    </div>`
    
}