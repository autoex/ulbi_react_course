import PostsPage from "../pages/postsPage/PostsPage";
import About from "../pages/aboutPage/About";
import PostDetails from "../components/PostDetails";

export const routes  = [
    {path: '/posts', component: PostsPage, exact: true},
    {path: '/posts/:id', component: PostDetails, exact: false},
    {path: '/', component: PostsPage, exact: true},
    {path: '/about', component: About, exact: true}
];