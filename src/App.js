import React, {useState, useMemo} from 'react';
import './styles/App.css'
import Posts from "./components/Posts";
import Form from "./components/Form";
import Select from "./UI/select/Select";
import Input from "./UI/input/Input";


const App = () => {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Title', description: 'Description'},
        {id: 2, title: '111', description: 'dfdf'},
        {id: 3, title: 'asds', description: 'aaaa'},

    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


    const getSortedPosts =()=> {
        if(selectedSort) {
            return [...posts].sort((a, b)=> a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts
    };

    const sortedPosts = useMemo(()=> {
        console.log('RUN')
        if(selectedSort) {
            return [...posts].sort((a, b)=> a[selectedSort].localeCompare(b[selectedSort]))
        }
        return posts

    }, [selectedSort, posts]);


    const sortedAndSearchedPosts = useMemo(()=> {
        return sortedPosts.filter((post)=>post.title.toLowerCase().includes(searchQuery))

    }, [searchQuery, sortedPosts])

    const createPost =(post)=> {
        setPosts([...posts, post])

    };
    const removePost =(idx)=> {
        setPosts(posts.filter(post=>  post.id !== idx ));


    };
    const sortPosts =(sort)=> {
        setSelectedSort(sort);
    };
    return (
        <div className='app'>
            <Form createPost={createPost} />
            <hr style={{marginBottom: '15px'}}/>
            <Input
                placeholder='Search..'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Select
                value={selectedSort}
                sortPosts={sortPosts}
                defaultValue='Select'
                options={[{value: 'title', name: 'By title'}, {value: 'description', name: 'By description'}]}
            />

            {sortedAndSearchedPosts.length === 0 ? 'No posts' : <Posts posts={sortedAndSearchedPosts} removePost={removePost}/>}



        </div>
    );
};

export default App;