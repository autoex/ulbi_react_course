import PostsPage from "../pages/postsPage/PostsPage";
import About from "../pages/aboutPage/About";
import PostDetails from "../components/PostDetails";
import Login from "../pages/login/Login";

export const privateRoutes  = [
    {path: '/posts', component: PostsPage, exact: true},
    {path: '/posts/:id', component: PostDetails, exact: false},
    {path: '/', component: PostsPage, exact: true},
    {path: '/about', component: About, exact: true}
];

export const publicRoutes  = [

    {path: '/login', component: Login, exact: true},
    {path: '/', component: Login, exact: true},
];