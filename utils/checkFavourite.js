export default function checkFavourite(favourites, story) {
    return favourites.some(favourite => favourite.id === story.id)
}