import Stories from './pages/stories.js'
const router = new Navigo(null,true,'#')

export default class RouteHandler {
    constructor() {
        this.createRoutes();
    }
    createRoutes() {
        const routes = [
            {
                path:'/',
                page: Stories
            },
            {
                path:'/new',
                page: Stories
            },
            {
                path:'/ask',
                page: Stories
            },
            {
                path:'/show',
                page: Stories
            },
            {
                path:'/favourites',
                page:Stories
            }
        ]
    
        routes.forEach(route => {
            router.on(route.path,() =>
                route.page(route.path)).resolve()
        })
    }
}