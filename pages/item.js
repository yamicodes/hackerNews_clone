import view from '../utils/view.js'
import Story from '../components/Story.js'
import Comment from '../components/Comment.js'

export default async function Item() {
    let story = null;
    let hasComments = false;
    let hasError = false;
    try {
    story = await getStory();
    hasComments = story.comments.length > 0
    }  
    catch {
        hasError = true;
        console.error(error)
    } 

    if (hasError) {
        view.innerHTML = `<div class="error">Error fetching story</div>`;
    }
    view.innerHTML = `
    <div>
        ${Story(story)}
    </div>
    <hr>
    <div>
        ${hasComments ? story.comments.map ( comment => 
            Comment(comment)).join("")
        : "No Comments"}
    </div>`
}

async function getStory() {
    const storyID = window.location.hash.split("?id=")[1]
    const response = await fetch(`https://node-hnapi.herokuapp.com/item/${storyID}`);
    const story = await response.json();
    return story;
}