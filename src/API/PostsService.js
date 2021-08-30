import axios from "axios";

class PostsService {
    static async getPosts() {
        const resp = await axios('https://jsonplaceholder.typicode.com/posts');
        return (resp.data);

    }

}


export default PostsService;