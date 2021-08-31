import axios from "axios";

class PostsService {
    static async getPosts(postsPerPage = 10, currentPage =4) {
        const resp = await axios(`https://jsonplaceholder.typicode.com/posts`, { params: {
            _limit: postsPerPage,
            _page: currentPage
        }});
        return (resp);

    }

}


export default PostsService;