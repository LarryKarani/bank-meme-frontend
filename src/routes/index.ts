import AllMemes from "../containers/memes/allmemes"
import FavMemes from "../containers/memes/myFavmemes"

interface Route {
    path: string;
    component: React.FC<{}>;
    name: string;
    exact: boolean;
}

const routes: Route[] = [
    {
        path: '/',
        component: AllMemes,
        name: 'Meme',
        exact: true
    },
    {
        path: '/fav-memes',
        component: FavMemes,
        name: 'Meme',
        exact: true
    },

]

export default routes