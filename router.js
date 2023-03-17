import Stories from './pages/stories.js'
import Item from './pages/item.js'
import Favourites from './pages/favourites.js'
const router = new Navigo(null,true,'#')

export default class RouteHandler {
    constructor() {
        this.createRoutes();
    }
    createRoutes() {
        const routes = [
            {
                path:'/',
                page: Stories,
            },
            {
                path:'/new',
                page: Stories,
            },
            {
                path:'/ask',
                page: Stories,
              
            },
            {
                path:'/show',
                page: Stories,
               
            },
            {
                path:'/favourites',
                page: Favourites,
                
            },
            {
                path:'/item',
                page: Item,
                
            }
        ]
    
        routes.forEach(route => {
            router.on(route.path,() =>
                route.page(route.path)).resolve()
        })
    }
}