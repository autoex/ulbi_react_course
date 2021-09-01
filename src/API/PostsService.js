import axios from "axios";

class PostsService {
    static async getPosts(postsPerPage = 10, currentPage =4) {
        const resp = await axios(`https://jsonplaceholder.typicode.com/posts`, { params: {
            _limit: postsPerPage,
            _page: currentPage
        }});
        return (resp);

    }


    static async getPost(id) {
        const resp = await axios(`https://jsonplaceholder.typicode.com/posts/${id}` );
        return (resp.data);

    }

    static async getComments(id) {
        const resp = await axios(`https://jsonplaceholder.typicode.com/posts/${id}/comments` );
        return (resp.data);

    }

}


export default PostsService;